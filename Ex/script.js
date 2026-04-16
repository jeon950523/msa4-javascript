const saveBtn = document.querySelector(`.saveBtn`);
const clearBtn = document.querySelector(`.clearBtn`);
const statusDisplay = document.querySelector(`.status`);
const result = document.querySelector(`.result`);

const STORAGE_KEY = "saramin-saved-jobs";

function getText(element){
  if(!element){
    return "정보없음";
  }
  return element.textContent.trim();
}
function getConditionText(card){
  return [...card.querySelectorAll("div.job_condition > span")]
    .map(span=>span.textContent.trim())
    .fliter(text=> text !=="");
}
function getPreferredText(card){
  return [...card.querySelectorAll("div.job_sector > a")]
  .map(link=>link.textContent.trim())
  .filter(text=>text !=="");
}
function getJobUrl(card){
  const titleLink = card.querySelector("h2.job_tit > a");
  if(!titleLink){
    return "";
  }
  return titleLink.href;
}

function getJobData(card){
  const companyElement = card.querySelector("div.area_corp > strong.corp_name > a");
  const titleElement = card.querySelector("h2.job_tit > a");

  const conditionTexts = getConditionText(card);
  const getPreferredText = getPreferredText(card);
  const jobUrl = getJobUrl(card);

  const company = getText(companyElement);
  const title = getText(titleElement);
  const career = conditionTexts[1] || "정보없음";
  const required = conditionTexts[2] || "정보없음";
  const loaction = conditionTexts[0] || "정보없음";
  const employmentType = conditionTexts[3] || "정보없음";
  const preferred = getPreferredText.join(", ") || "정보없음";

  const id = jobUrl || company + "_" + title;

  return {
    id: id,
    company : company,
    title: title,
    career: career,
    required: required,
    loaction:loaction,
    employmentType:employmentType,
    preferred:preferred,
    url:jobUrl
  };
}
function collectJobs(){
  const cards = document.querySelectorAll(".item_recruit");
  if(cards.length === 0){
    return[];
  }
  const jobs = [...cards]
  .map(card=>getJobData(card))
  .filter(job=>job.title !== "정보없음");
  return jobs;
}
function loadSaveJob(){
  const saveData = localStorage.getItem(STORAGE_KEY);
  if(!saveData){
    return [];
  }
  return JSON.parse(saveData);
}
function saveJobs(newJobs){
  const saveJobs=loadSaveJob();
  const jobMap = new Map();

  saveJobs.forEach(function(job){
    jobMap.set(job.id, job);
  });
  newJobs.forEach(function(job){
    jobMap.set(job.id, job);
  });

  const mergedJbos = [...jobMap.values()];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedJbos));
  return mergedJbos;

}

function createJobRow(label, value){
  const row = document.createElement("p");
  row.className = "jobRow";

  const labelspan = document.createElement("span");
  labelspan.className = "jobLabel";
  labelspan.textContent = label;

  const valueSpan = document.createElement("span");
  valueSpan.textContent = value;

  row.append(labelspan);
  row.append(valueSpan);

  return row;
}

function createJobCard(job){
  const card = document.createElement("article");
  card.className = "jobCard";

  const title = document.createElement("h2");
  title.className = "jobCardTitle";
  title.textContent = job.title;

  const companyRow = createJobRow("회사명:", job.company);
  const careerRow = createJobRow("경력:",job.career);
  const requiredRow = createJobRow("학력:", job.required);
  const loactionRow = createJobRow("지역:", job.loaction);
  const employmentTypeRow = createJobRow("고용형태:", job.employmentType);
  const preferredRow = createJobRow("우대/키워드:", job.preferred);

  card.append(title);
  card.append(companyRow);
  card.append(careerRow);
  card.append(requiredRow);
  card.append(loactionRow);
  card.append(employmentTypeRow);
  card.append(preferredRow);

  if(job.url){
    const link = document.createElement("a");
    link.className = "jobLink";
    link.href = job.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "공고 바로가기";

    card.append(link);
  }
  return card;
}

function renderJobs(jobs){
  result.textContent = "";

  if(jobs.length===0){
    statusDisplay.textContent = "저장된 공고가 없습니다";
    return;
  }
  statusDisplay.textContent = "저장된 공고 수:" + jobs.length + "개";

  job.forEach(function(job){
    const card = createJobCard(job);
    result.append(card);
  });
}

saveBtn.addEventListener("click", function(){
  const jobs = collectJobs();

  if(jobs.length===0){
    statusDisplay.textContent = "현재 패이지에서 공고를 찾지 못했습니다."
    result.textContent = "";
    return;
  }
  const savedJobs = saveJobs(jobs);
  renderJobs(savedJobs);
});
clearBtn.addEventListener("click",function(){
  localStorage.removeItem(STORAGE_KEY);
  renderJobs([]);
});

const savedJobs = loadSaveJob();
renderJobs(savedJobs);

