from datetime import datetime
from flask import Flask, render_template

from flask import Flask, render_template

app = Flask(__name__)

@app.context_processor
def inject_current_year():
    return {"current_year": datetime.now().year}


@app.route("/")
def home():
    return render_template("index.html", page="home")


@app.route("/about/")
def about():
    return render_template("about.html", page="about")


@app.route("/journal/")
def journal():
    return render_template("journal/index.html", page="journal")


@app.route("/projects/")
def projects():
    return render_template("projects/index.html", page="projects")


@app.route("/research/")
def research():
    return render_template("research/index.html", page="research")


@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404


if __name__ == "__main__":
    app.run(debug=True)