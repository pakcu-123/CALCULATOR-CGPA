<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GPA Calculator</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>GPA Calculator</h2>
    <p>Author: [pakcu carlos]</p>

    <div>
        <button onclick="calculateGPA()">Calculate GPA</button>
    </div>

    <h3>Enter Subject Details:</h3>
    <div id="subjectInputs"></div>
    <button onclick="addSubject()">Add Subject</button>
    <br>

    <h3>Results:</h3>
    <table>
        <thead>
            <tr>
                <th>Index</th>
                <th>Subject</th>
                <th>Credit</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Point</th>
            </tr>
        </thead>
        <tbody id="resultsTable">
        </tbody
