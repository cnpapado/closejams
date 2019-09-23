from flask import render_template, request, jsonify
from app import app
#from app.forms import ArtistSearch

@app.route('/')
def startpage():
    return render_template('start.html')
    
@app.route('/postme', methods=['POST'])
def getjsdata():
    artist1 = request.form['artist1']
    return jsonify({'name':'snarky puppy'})
