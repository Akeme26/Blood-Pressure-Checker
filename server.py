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
        systolic = request.form['topValue']
        diastolic = request.form['bottomValue']
        
        patient_details.append({"name":name, "email":email, "topValue":systolic, "bottomValue":diastolic})

        return patient_details[-1]

@app.route('/email')
def test():
    return patient_details[0]

if __name__ == "__main__":
    app.run(debug=True)
