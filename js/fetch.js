fetch("json/data.json")
    .then((res) => res.json())
    .then((data) => {
        let output = "";
        data.forEach(function (repo) {
            discription = repo.description;

            console.log(discription.slice(0, 7));

            output += `<!--repo card started-->

      <div class="col-lg-4 mb-4">
      <div class="card h-100">
          <img src="${repo.banner}" alt="" class="card-img-top">
          <div class="card-body">
              
          <h5 class="card-title">${repo.name}</h5>
              
              <h6 class="lang" style="color:gray;"><i class="ri-code-box-line"></i>${" "}<b>${repo.lang}</b></h6>
              
              <div style="display:flex;" class="mt-2 mb-2">
              
              
  <li class="m-2 list-data"><i class="ri-star-line"></i>${repo.stars} Stars</li>
  <li class="m-2 list-data"><i class="ri-git-branch-line"></i>${repo.forks} Forks</li>
  <li class="m-2 list-data"><i class="ri-github-line"></i><a href="${repo.url}" target="_blank"> View</a></li>
              
              </div>
              
              <p align="justify" class="repo-info">${repo.description} <a class="read" href="${repo.url}" target="_blank">${" "}Read More</a></p>
          </div>
      
          </div>
      </div>
      
      `;
        });
        document.getElementById("repo-card").innerHTML = output;
    });
