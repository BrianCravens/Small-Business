const apiURL = "http://localhost:8088/employees?_expand=department&_expand=computer"


   function getAllEmployees(){
        return fetch(`${apiURL}`)
        .then(data => data.json())
    }

const employeeOutputContainer = document.querySelector("#employeeContainer") 
function employeeToHtml(employee){
    return`
    <article class="employee">
        <header class="employee__name">
            <h1>${employee.name}</h1>
        </header>
        <section class="employee__department">
             ${employee.department.name}
        </section>
        <section class="employee__computer">
             ${employee.computer.model}
        </section>
    </article>
    `
}
function renderToDom(employeeHtml){
    employeeOutputContainer.innerHTML += employeeHtml
}
function getAndRenderAllEmployees(){
    employeeOutputContainer.innerHTML = ""
    getAllEmployees().then(employees => {
        employees.map(employeeToHtml).forEach(renderToDom);
    })
    
}
getAndRenderAllEmployees()
