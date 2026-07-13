const name = 'Abdulsalam';
const age = '35';
const job = 'Web developer';
const city = 'Ibadan';
let html;

//Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

function hello(){
    return 'hello';
}

html = `
   <ul>
       <li>Name: ${name}</li>
       <li>Age: ${age}</li>
       <li>Job: ${job}</li>
       <li>City: ${city}</li>
       <li>${2 + 2}</li>
       <li>${hello()}</li>
       <li>${age > 30 ? 'over 30' : 'under 30'}</li>
   </ul>
`;

document.body.innerHTML = html;
