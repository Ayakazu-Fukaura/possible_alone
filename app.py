from email.mime import image
from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route('/test')
def testpage():
    # 実験用のページです（深浦
    return render_template('test.html')
# #######################


@app.route('/')
def home():
    return redirect('/1')


@app.route('/0')
def page0():
    return render_template('0.html')


@app.route('/00')
def page00():
    return render_template('00.html')


@app.route('/1')
def page1():
    return render_template('komatsu1.html')


@app.route('/2')
def page2():
    return render_template('2.html')


@app.route('/edit_task')
def edit_taskpage():
    return render_template('edit_task.html')


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


@app.route('/7')
def page7():
    return render_template('7.html')


if __name__ == "__main__":
    app.run(debug=True, port=5000)
