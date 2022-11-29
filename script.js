// TODO: add code here
window.addEventListener('load', function () {
    const containerAstro = document.getElementById('container');
    const astronautNum = document.getElementById('astronautNum');

    async function getAstronautData() {
        const astronautData = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const json = await astronautData.json();

        astronautNum.innerHTML = `Number of Astronauts: ${json.length}`
        
        console.log(json[0].hoursInSpace)
        for (i = 0; i < json.length; i++) {
            if (json[i].active !== true) {
                containerAstro.innerHTML += `
                    <div class="astronaut">
                     <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                    `
            } else {
                containerAstro.innerHTML += `
                    <div class="astronaut">
                     <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class='active'>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                    `
            }

        }
        return json;
    };
    // if (active.innerHTML === 'Active: true'){
    //     console.log('this is true')
    //     activity.style.color = 'green';
    // }
    data = getAstronautData();
});