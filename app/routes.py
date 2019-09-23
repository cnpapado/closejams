from flask import render_template
from app import app
#from app.forms import ArtistSearch

@app.route('/')
def startpage():
    #form = ArtistSearch()
    #if form.validate_on_submit(): return "Validated!"
    return render_template('start.html')#, form=form)
    



