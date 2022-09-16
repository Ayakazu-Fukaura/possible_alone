from email.mime import image
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/1')
def page1():
    return render_template('komatsu1.html')


@app.route('/2')
def page2():
    return render_template('2.html')


@app.route('/3')
def page3():
    return render_template('yuto③④.html')


@app.route('/4')
def page4():
    return render_template('yutoGoodjob.html')


@app.route('/5')
def page5():
    return render_template('5.html')


@app.route('/6')
def page6():
    return render_template('6.html')


if __name__ == "__main__":
    app.run(debug=True)
