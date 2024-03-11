from flask import Blueprint, jsonify, request
from db import get_db_connection

api = Blueprint('api', __name__)

@api.route('/health', methods=['GET'])
def health_check():
    return jsonify({"message": "Server is running"})

@api.route('/accounts', methods=['GET'])
def get_accounts():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM accounts')
        accounts = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"data": accounts})
    else:
        return jsonify({"error": "Database connection failed"}), 500

@api.route('/transactions', methods=['GET'])
def get_transactions():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM transactions')
        transactions = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"data": transactions})
    else:
        return jsonify({"error": "Database connection failed"}), 500

@api.route('/transactions', methods=['POST'])
def add_transaction():
    transaction_data = request.json
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO transactions '
            '(account_id, bank_name, date, type, payee, amount, category) '
            'VALUES (%s, %s, %s, %s, %s, %s, %s)',
            (
                transaction_data['account_id'],
                transaction_data['bank_name'],
                transaction_data['date'],
                transaction_data['type'],
                transaction_data['payee'],
                transaction_data['amount'],
                transaction_data['category']
            )
        )
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "Transaction added successfully"}), 201
    else:
        return jsonify({"error": "Database connection failed"}), 500