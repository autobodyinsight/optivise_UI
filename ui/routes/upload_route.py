# optivise/ui/routes/upload_route.py

from flask import Blueprint, render_template, request, redirect, url_for
import os

upload_bp = Blueprint('upload_bp', __name__)

@upload_bp.route('/', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files.get('pdf')
        if file and file.filename.endswith('.pdf'):
            save_path = os.path.join('uploads', file.filename)
            file.save(save_path)
            return redirect(url_for('upload_bp.upload'))
    return render_template('upload.html')