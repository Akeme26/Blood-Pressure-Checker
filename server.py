from flask import Flask, redirect, render_template, request, redirect, url_for

app = Flask("BP App")

patient_details = []


@app.route('/')
def root():
    return render_template('BPTest_Homepage.html')


@app.route('/result', methods = ['POST'])
def result():
    if request.method == 'POST':
        name = request.form['Name']
        email = request.form['Email']
        
        patient_details.append({"name":name, "email":email})

        return patient_details[-1]

if __name__ == "__main__":
    app.run(debug=True)
