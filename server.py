from flask import Flask, render_template, request

app = Flask("BP App")

patient_details = []


@app.route('/')
def root():
    return render_template('BPTest_Homepage.html')


@app.route('/result', methods = ['POST'])
def result():
    pass

if __name__ == "__main__":
    app.run(debug=True)
