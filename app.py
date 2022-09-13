from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html',)

@app.route('/3')
def page3():
    return render_template('yuto③④.html')

@app.route('/4')
def page4():
    return render_template('yutoGoodjob.html')

@app.route('/5')
def page5():
    return render_template('5.html')


if __name__ == "__main__":
    app.run(debug=True)
