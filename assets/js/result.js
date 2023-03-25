const plusInCircleIconBtn = document.querySelector('.plusInCircle_icon_Btn');
const listContainer = document.querySelector('.list_container');

plusInCircleIconBtn.addEventListener('click', () => {
  // Get the TA_preview element
  const taPreview = document.querySelector('.TA_preview');

  // Create a new list_preview element
  const listPreview = document.createElement('div');
  listPreview.classList.add('list_preview');

  // Create the list_preview_info element
  const listPreviewInfo = document.createElement('div');
  listPreviewInfo.classList.add('list_preview_info');

  // Create the list_title element and set its text to the TA_title
  const listTitle = document.createElement('div');
  listTitle.classList.add('list_title');
  listTitle.textContent = taPreview.querySelector('.TA_title').textContent;

  // Create the list_middleLine_container element
  const listMiddleLineContainer = document.createElement('div');
  listMiddleLineContainer.classList.add('list_middleLine_container');

  // Create the list_province element and set its text to the TA_province
  const listProvince = document.createElement('div');
  listProvince.classList.add('list_province');
  listProvince.textContent = taPreview.querySelector('.TA_province').textContent;

  // Create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('icon_Btn');
  deleteBtn.innerHTML = '<img src="/assets/icons/bin.png" class="bin_icon">';

  // Add the list_province and delete button elements to the list_middleLine_container
  listMiddleLineContainer.appendChild(listProvince);
  listMiddleLineContainer.appendChild(deleteBtn);

  // Create the list_type element and set its text to the TA_type
  const listType = document.createElement('div');
  listType.classList.add('list_type');
  listType.textContent = taPreview.querySelector('.TA_type').textContent;

  // Add the title, list_middleLine_container, and type elements to the list_preview_info element
  listPreviewInfo.appendChild(listTitle);
  listPreviewInfo.appendChild(listMiddleLineContainer);
  listPreviewInfo.appendChild(listType);

  // Add the list_preview_info element to the list_preview element
  listPreview.appendChild(listPreviewInfo);

  // Add the list_preview element to the list_container in section 2
  listContainer.appendChild(listPreview);

  // Add event listener to new delete button
  deleteBtn.addEventListener('click', () => {
    deleteListPreview(listPreview);
  });
});

const iconBtns = document.querySelectorAll('.icon_Btn');
iconBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const preview = e.target.closest('.list_preview');
    deleteListPreview(preview);
  });
});

function deleteListPreview(preview) {
  preview.remove();
}


  const myPlanIconBtn = document.querySelector('.myPlan_icon_Btn');
  const myPlanPreviewInfo = document.querySelector('.myPlan_preview_info');

  myPlanIconBtn.addEventListener('click', () => {
    myPlanPreviewInfo.remove();
  });

  const myPlanPlusInCircleIconBtn = document.querySelector('.myPlan_plusInCircle_icon_Btn');
const myPlanContainer = document.querySelector('.myPlan_container');

myPlanPlusInCircleIconBtn.addEventListener('click', () => {
  // Get the latest myPlan_preview element
  const latestMyPlanPreview = myPlanContainer.querySelector('.myPlan_preview:last-of-type');

  // Create a new myPlan_preview element
  const newMyPlanPreview = document.createElement('div');
  newMyPlanPreview.classList.add('myPlan_preview');

  // Create the date input element
  const dateInput = document.createElement('input');
  dateInput.type = 'date';

  // Create the myPlan_preview_info element
  const myPlanPreviewInfo = document.createElement('div');
  myPlanPreviewInfo.classList.add('myPlan_preview_info');

  // Create the myPlan_title element and set its text to the latest myPlan_title
  const myPlanTitle = document.createElement('div');
  myPlanTitle.classList.add('myPlan_title');
  myPlanTitle.textContent = latestMyPlanPreview.querySelector('.myPlan_title').textContent;

  // Create the myPlan_middleLine_container element
  const myPlanMiddleLineContainer = document.createElement('div');
  myPlanMiddleLineContainer.classList.add('myPlan_middleLine_container');

  // Create the myPlan_province element and set its text to the latest myPlan_province
  const myPlanProvince = document.createElement('div');
  myPlanProvince.classList.add('myPlan_province');
  myPlanProvince.textContent = latestMyPlanPreview.querySelector('.myPlan_province').textContent;

  // Create the delete button element
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('myPlan_icon_Btn');
  const deleteIcon = document.createElement('img');
  deleteIcon.src = '/icons/bin.png';
  deleteIcon.classList.add('bin_icon');
  deleteButton.appendChild(deleteIcon);

  // Add the myPlan_title and myPlan_middleLine_container elements to the myPlanPreviewInfo element
  myPlanPreviewInfo.appendChild(myPlanTitle);
  myPlanPreviewInfo.appendChild(myPlanMiddleLineContainer);

  // Add the myPlan_province and delete button elements to the myPlan_middleLine_container element
  myPlanMiddleLineContainer.appendChild(myPlanProvince);
  myPlanMiddleLineContainer.appendChild(deleteButton);

  // Add the date input and myPlanPreviewInfo elements to the new myPlan_preview element
  newMyPlanPreview.appendChild(dateInput);
  newMyPlanPreview.appendChild(myPlanPreviewInfo);

  // Append the new myPlan_preview element to the myPlan_container
  myPlanContainer.appendChild(newMyPlanPreview);

  // Add event listener to the delete button
  deleteButton.addEventListener('click', () => {
    newMyPlanPreview.remove();
  });
});

const listPreviews = document.querySelectorAll('.TA_preview');
listPreviews.forEach(listPreview => {
  listPreview.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', listPreview.innerHTML);
  });
});

const myplanPreview = document.querySelector('.myplan_preview');
myplanPreview.addEventListener('dragover', event => {
  event.preventDefault();
});
myplanPreview.addEventListener('drop', event => {
  event.preventDefault();
  const newPreviewInfo = document.createElement('div');
  newPreviewInfo.classList.add('myplan_preview_info');
  newPreviewInfo.innerHTML = event.dataTransfer.getData('text/plain');
  myplanPreview.appendChild(newPreviewInfo);
});