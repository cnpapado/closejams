from flask import render_template, request, jsonify
from app import app
#from app.forms import ArtistSearch

@app.route('/')
def startpage():
    return render_template('start.html')
    
@app.route('/postme', methods=['POST'])
def getjsdata():
    artist1 = request.form['artist1']
    r =   {
    "resultsPage": {
      "results": {
        "artist": [
          {
            "id":253846,
            "uri":"http://www.songkick.com/artists/253846-radiohead",
            "displayName":"Radiohead",
            "onTourUntil":"2010-01-01"
          },
          {
            "id":253841,
            "uri":"http://www.songkick.com/artists/253846-radiohead",
            "displayName":"The National",
            "onTourUntil":"2010-01-01"
          },
          {
            "id":253842,
            "uri":"http://www.songkick.com/artists/253846-radiohead",
            "displayName":"Arcade Fire",
            "onTourUntil":"2010-01-01"
          },
          {
            "id":253843,
            "uri":"http://www.songkick.com/artists/253846-radiohead",
            "displayName":"Grizzly Bear",
            "onTourUntil":"2010-01-01"
          }
        ]
      },
      "totalEntries":4,
      "perPage":50,
      "page":1,
      "status":"ok"
    }
  }
    


    return jsonify(r)
