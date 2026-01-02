

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const arrow = document.querySelector(".arrow");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  arrow.classList.toggle("rotate");
});

const projectData = {
  task_title: "Explore The World of Management",
  task_description:
    "As a project manager you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.",
  assets: [
    {
      asset_title: "Technical Project Management",
      asset_description:
        "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
      asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
      asset_content_type: "video"
    },
   
      {
        asset_title:"gyucf",
        asset_description:"bkjbvbvkb",
        asset_content_type: "threadbuilder"
      },

      {
         asset_title:"gyucf",
        asset_description:"bkjbvbvkb",
        asset_content_type: "threadbuilder"
      },
      {
        asset_title:"gyucf",
        asset_description:"bkjbvbvkb",
        asset_url:"https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
        asset_content_type: "threadbuilder"
      }
    ]
  
};

// Task data
document.getElementById("taskTitle").innerText =
  projectData.task_title;

document.getElementById("taskDesc").innerText =
  projectData.task_description;

// Asset data
document.getElementById("assetTitle").innerText =
  projectData.assets[0].asset_title;

document.getElementById("assetDesc").innerText =
  projectData.assets[0].asset_description;

document.getElementById("video").src =
  projectData.assets[0].asset_content;

  document.getElementById("threadTitle").innerHTML=
  projectData.assets[1].asset_title;

  document.getElementById("threadDesc").innerText=
  projectData.assets[1].asset_description;

  document.getElementById("LinkUrl").href=
  projectData.assets[3].asset_url;


