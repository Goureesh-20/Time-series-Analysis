from flask import Blueprint, render_template

board = Blueprint(__name__, "board")

@board.route("/")

def home():
    return render_template("index.html")