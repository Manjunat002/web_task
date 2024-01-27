from flask import request, jsonify
from backend.app import app, db
from backend.models import User

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    
    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({'error': 'Username or email already exists'}), 400

    
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 200


@app.route('/api/profile', methods=['GET'])
def get_profile():
    return jsonify({'username': 'example', 'email': 'example@example.com'}), 200
