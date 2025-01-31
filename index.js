document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.wrapperToggle_btn');
    const sections = document.querySelectorAll('.container');
    const webDataDIV = document.getElementById('webDataDIV');

    // Function to update active button and scroll into view
    const updateActiveButton = (sectionId) => {
        buttons.forEach(button => button.classList.remove('wrapperToggle_btnActive'));
        const activeButton = document.getElementById(`leftNav_${sectionId}`);
        if (activeButton) {
            activeButton.classList.add('wrapperToggle_btnActive');
            activeButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // Listen for scroll event
    webDataDIV.addEventListener('scroll', () => {
        let activeFound = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const containerRect = webDataDIV.getBoundingClientRect();
            const isVisible = Math.abs(rect.top - containerRect.top) < 10 || 
                             (rect.top < containerRect.top + containerRect.height / 2 && rect.bottom > containerRect.top + containerRect.height / 2);
            if (!activeFound && isVisible) {
                updateActiveButton(section.id);
                activeFound = true;
            }
        });
    });
    manageZoomInOut('imageArea', 'zoomInBtn','zoomOutBtn');
});

// Function to toggle active class on clicked element
function toggleActive(elementId) {
    // Remove 'wrapperToggle_btnActive' from all elements
    const buttons = document.querySelectorAll('.wrapperToggle_btn');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('wrapperToggle_btnActive'));
           
    // Add 'wrapperToggle_btnActive' to the clicked item
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.add('wrapperToggle_btnActive');
    }

  }
  

// Get an array of innerHTML or textContent from all elements with the class 'wrapperToggle_btn'
const placeholders = Array.from(document.querySelectorAll('.wrapperToggle_btn')).map(item => item.textContent.trim());

console.log(placeholders);  // Check the array of placeholders

// Function to change the placeholder
let currentIndex = 0;
function changePlaceholder() {
  const input = document.getElementById("myInput");
  input.placeholder = placeholders[currentIndex];

  // Increment index and reset it when it reaches the end of the array
  currentIndex = (currentIndex + 1) % placeholders.length;
}

// Set an interval to change the placeholder every 2 seconds (2000ms)
setInterval(changePlaceholder, 2000);

  

// active class for print current tabs
//  Header1 view for eye
function toggleReviewData_Header1() {
    var x = document.getElementById("HeaderTemplateDIV_Header1");
    if (x.style.display === "none") {
        document.getElementById('HeaderTemplateDIV_Header1').style.display = "block";
        document.getElementById('toggleEyeIcon_slash5').style.display = "block";
        document.getElementById('toggleEyeIcon5').style.display = "none";
    } else {
        document.getElementById('HeaderTemplateDIV_Header1').style.display = "none";
        document.getElementById('toggleEyeIcon_slash5').style.display = "none";
        document.getElementById('toggleEyeIcon5').style.display = "block";
    }
}
// Header2 view for eye
function toggleReviewData_Header4() {
    var x = document.getElementById("HeaderTemplateDIV_Header4");
    if (x.style.display === "none") {
        document.getElementById('HeaderTemplateDIV_Header4').style.display = "block";
        document.getElementById('toggleEyeIcon_slash6').style.display = "block";
        document.getElementById('toggleEyeIcon6').style.display = "none";
    } else {
        document.getElementById('HeaderTemplateDIV_Header4').style.display = "none";
        document.getElementById('toggleEyeIcon_slash6').style.display = "none";
        document.getElementById('toggleEyeIcon6').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintViewtable() {
    var x = document.getElementById("PrintViewDIV_table");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_table').style.display = "block";
        document.getElementById('toggleEyeIcon_slash7').style.display = "block";
        document.getElementById('toggleEyeIcon7').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_table').style.display = "none";
        document.getElementById('toggleEyeIcon_slash7').style.display = "none";
        document.getElementById('toggleEyeIcon7').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintViewtable2() {
    var x = document.getElementById("PrintViewDIV_table2");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_table2').style.display = "block";
        document.getElementById('toggleEyeIcon_slash8').style.display = "block";
        document.getElementById('toggleEyeIcon8').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_table2').style.display = "none";
        document.getElementById('toggleEyeIcon_slash8').style.display = "none";
        document.getElementById('toggleEyeIcon8').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintViewtable3() {
    var x = document.getElementById("PrintViewDIV_table3");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_table3').style.display = "block";
        document.getElementById('toggleEyeIcon_slash9').style.display = "block";
        document.getElementById('toggleEyeIcon9').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_table3').style.display = "none";
        document.getElementById('toggleEyeIcon_slash9').style.display = "none";
        document.getElementById('toggleEyeIcon9').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintViewNotes() {
    var x = document.getElementById("PrintViewDIV_notes");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_notes').style.display = "block";
        document.getElementById('toggleEyeIcon_slash10').style.display = "block";
        document.getElementById('toggleEyeIcon10').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_notes').style.display = "none";
        document.getElementById('toggleEyeIcon_slash10').style.display = "none";
        document.getElementById('toggleEyeIcon10').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintViewSign() {
    var x = document.getElementById("PrintViewDIV_deSign");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_deSign').style.display = "block";
        document.getElementById('toggleEyeIcon_slash11').style.display = "block";
        document.getElementById('toggleEyeIcon11').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_deSign').style.display = "none";
        document.getElementById('toggleEyeIcon_slash11').style.display = "none";
        document.getElementById('toggleEyeIcon11').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintEMRTable1() {
    var x = document.getElementById("PrintViewDIV_emrTable1");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_emrTable1').style.display = "block";
        document.getElementById('toggleEyeIcon_slash12').style.display = "block";
        document.getElementById('toggleEyeIcon12').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_emrTable1').style.display = "none";
        document.getElementById('toggleEyeIcon_slash12').style.display = "none";
        document.getElementById('toggleEyeIcon12').style.display = "block";
    }
}

// PrintTable view for eye
function toggleReviewData_PrintEMRTable2() {
    var x = document.getElementById("PrintViewDIV_emrTable2");
    if (x.style.display === "none") {
        document.getElementById('PrintViewDIV_emrTable2').style.display = "block";
        document.getElementById('toggleEyeIcon_slash13').style.display = "block";
        document.getElementById('toggleEyeIcon13').style.display = "none";
    } else {
        document.getElementById('PrintViewDIV_emrTable2').style.display = "none";
        document.getElementById('toggleEyeIcon_slash13').style.display = "none";
        document.getElementById('toggleEyeIcon13').style.display = "block";
    }
}


// active class for Desktop current tabs

// Eye icon for Input Type
function toggleEye_InputType() {
    var x = document.getElementById("inputType_code");
    if (x.style.display === "none") {
        document.getElementById('inputType_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_inputType').style.display = "block";
        document.getElementById('toggleEyeIcon_inputType').style.display = "none";
    } else {
        document.getElementById('inputType_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_inputType').style.display = "none";
        document.getElementById('toggleEyeIcon_inputType').style.display = "block";
    }
}

// Eye icon for Time Picker
function toggleEye_timePicker() {
    var x = document.getElementById("listReviewDIV_TimeInp");
    if (x.style.display === "none") {
        document.getElementById('listReviewDIV_TimeInp').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_timePicker').style.display = "block";
        document.getElementById('toggleEyeIcon_timePicker').style.display = "none";
    } else {
        document.getElementById('listReviewDIV_TimeInp').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_timePicker').style.display = "none";
        document.getElementById('toggleEyeIcon_timePicker').style.display = "block";
    }
}

// Eye icon for Icon Button
function toggleEye_iconButton() {
    var x = document.getElementById("iconButton_code");
    if (x.style.display === "none") {
        document.getElementById('iconButton_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_IconButton').style.display = "block";
        document.getElementById('toggleEyeIcon_IconButton').style.display = "none";
    } else {
        document.getElementById('iconButton_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_IconButton').style.display = "none";
        document.getElementById('toggleEyeIcon_IconButton').style.display = "block";
    }
}
// Eye icon for Icons Group on mouseover
function toggleEye_iconGrp_mouseover() {
    var x = document.getElementById("iconGrp_code");
    if (x.style.display === "none") {
        document.getElementById('iconGrp_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_iconGrp').style.display = "block";
        document.getElementById('toggleEyeIcon_iconGrp').style.display = "none";
    } else {
        document.getElementById('iconGrp_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_iconGrp').style.display = "none";
        document.getElementById('toggleEyeIcon_iconGrp').style.display = "block";
    }
}

//Switchable Tabs for Eye 1
function toggleEye_switchableTabs() {
    var x = document.getElementById("switchableTabs_code");
    if (x.style.display === "none") {
        document.getElementById('switchableTabs_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_tabs').style.display = "block";
        document.getElementById('toggleEyeIcon_tabs').style.display = "none";
    } else {
        document.getElementById('switchableTabs_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_tabs').style.display = "none";
        document.getElementById('toggleEyeIcon_tabs').style.display = "block";
    }
}

//Switchable Tabs for Eye 2
function toggleEye_switchableTabs_v2() {
    var x = document.getElementById("switchableTabs_code_v2");
    if (x.style.display === "none") {
        document.getElementById('switchableTabs_code_v2').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_tabs_v2').style.display = "block";
        document.getElementById('toggleEyeIcon_tabs_v2').style.display = "none";
    } else {
        document.getElementById('switchableTabs_code_v2').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_tabs_v2').style.display = "none";
        document.getElementById('toggleEyeIcon_tabs_v2').style.display = "block";
    }
}

//Switchable Vertical Tabs for Eye 3
function toggleEye_verticalTabs() {
    var x = document.getElementById("switchableVerticalTabs_code");
    if (x.style.display === "none") {
        document.getElementById('switchableVerticalTabs_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slashVertical_tabs').style.display = "block";
        document.getElementById('toggleEyeIconVertical_tabs').style.display = "none";
    } else {
        document.getElementById('switchableVerticalTabs_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slashVertical_tabs').style.display = "none";
        document.getElementById('toggleEyeIconVertical_tabs').style.display = "block";
    }
}

//Accordion panel for Eye 3
function toggleEye_verticalTabs_() {
    var x = document.getElementById("accordionPanel_code");
    if (x.style.display === "none") {
        document.getElementById('accordionPanel_code').style.display = "block";
        document.getElementById('toggleEyeIconSlashAccordion').style.display = "block";
        document.getElementById('toggleEyeIconAccordion').style.display = "none";
    } else {
        document.getElementById('accordionPanel_code').style.display = "none";
        document.getElementById('toggleEyeIconSlashAccordion').style.display = "none";
        document.getElementById('toggleEyeIconAccordion').style.display = "block";
    }
}

//Accordion panel
const accordionTitles = document.querySelectorAll(".med_accordionTitle");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        if (accordionTitle.classList.contains("is-open")) {
        accordionTitle.classList.remove("is-open");
        } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
  });
});

//Collapse panel
function toggleCollapse() {
    var x = document.getElementById("toggleCollapse");
    if (x.style.display === "none") {
        document.getElementById('toggleCollapse').style.display = "block";
        document.getElementById('collapseIcon').style.transform = "rotate(-180deg)";
    } else {
        document.getElementById('toggleCollapse').style.display = "none";
        document.getElementById('collapseIcon').style.transform = "rotate(0deg)";
    }
}


//User toggle panel
function toggleUser() {
    var x = document.getElementById("toggleUserDialog");
    if (x.style.display === "none") {
        document.getElementById('toggleUserDialog').style.display = "block";
        document.getElementById('userSlotHeader').style.transform = "rotate(-180deg)";
    } else {
        document.getElementById('toggleUserDialog').style.display = "none";
        document.getElementById('userSlotHeader').style.transform = "rotate(0deg)";
    }
}



// Lists view for eye 3
function toggleEye_listView() {
    var x = document.getElementById("listView_code");
    if (x.style.display === "none") {
        document.getElementById('listView_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash4').style.display = "block";
        document.getElementById('toggleEyeIcon4').style.display = "none";
    } else {
        document.getElementById('listView_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash4').style.display = "none";
        document.getElementById('toggleEyeIcon4').style.display = "block";
    }
}

// Lists Grid view for eye 4
function toggleEye_gridView() {
    var x = document.getElementById("listGridView_code");
    if (x.style.display === "none") {
        document.getElementById('listGridView_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash3').style.display = "block";
        document.getElementById('toggleEyeIcon3').style.display = "none";
    } else {
        document.getElementById('listGridView_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash3').style.display = "none";
        document.getElementById('toggleEyeIcon3').style.display = "block";
    }
}

//toggleEye for table view 5
function toggleEye_tableView() {
    var x = document.getElementById("listTableView_code");
    if (x.style.display === "none") {
        document.getElementById('listTableView_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash1').style.display = "block";
        document.getElementById('toggleEyeIcon1').style.display = "none";
    } else {
        document.getElementById('listTableView_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash1').style.display = "none";
        document.getElementById('toggleEyeIcon1').style.display = "block";
    }
}

//toggleEye for table horizontal view 6
function toggleEye_tableHorizontalView() {
    var x = document.getElementById("listTableHorizontalView_code");
    if (x.style.display === "none") {
        document.getElementById('listTableHorizontalView_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash2').style.display = "block";
        document.getElementById('toggleEyeIcon2').style.display = "none";
    } else {
        document.getElementById('listTableHorizontalView_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash2').style.display = "none";
        document.getElementById('toggleEyeIcon2').style.display = "block";
    }
}

//toggleEye for popup 7
function toggleEye_popup() {
    var x = document.getElementById("popup_code");
    if (x.style.display === "none") {
        document.getElementById('popup_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_popup').style.display = "block";
        document.getElementById('toggleEyeIcon_popup').style.display = "none";
    } else {
        document.getElementById('popup_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_popup').style.display = "none";
        document.getElementById('toggleEyeIcon_popup').style.display = "block";
    }
}

//toggleEye for alert popup 8
function toggleEyeAlert_popup() {
    var x = document.getElementById("popupAlert_code");
    if (x.style.display === "none") {
        document.getElementById('popupAlert_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_popupAlert').style.display = "block";
        document.getElementById('toggleEyeIcon_popupAlert').style.display = "none";
    } else {
        document.getElementById('popupAlert_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_popupAlert').style.display = "none";
        document.getElementById('toggleEyeIcon_popupAlert').style.display = "block";
    }
}

//toggleEye for left right drawer 9
function toggleEye_RLDrawer() {
    var x = document.getElementById("rightLeftDrawer_code");
    if (x.style.display === "none") {
        document.getElementById('rightLeftDrawer_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_RLDrawer').style.display = "block";
        document.getElementById('toggleEyeIcon_RLDrawer').style.display = "none";
    } else {
        document.getElementById('rightLeftDrawer_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_RLDrawer').style.display = "none";
        document.getElementById('toggleEyeIcon_RLDrawer').style.display = "block";
    }
}

//toggleEye for toggle drawer 10
function toggleEye_toggleFilter() {
    var x = document.getElementById("toggleFilter_code");
    if (x.style.display === "none") {
        document.getElementById('toggleFilter_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_toggle_filter').style.display = "block";
        document.getElementById('toggleEyeIcon_toggle_filter').style.display = "none";
    } else {
        document.getElementById('toggleFilter_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_toggle_filter').style.display = "none";
        document.getElementById('toggleEyeIcon_toggle_filter').style.display = "block";
    }
}

//toggleEye for Pagination 11
function toggleReviewData_pagination() {
    var x = document.getElementById("paginationDIV_code");
    if (x.style.display === "none") {
        document.getElementById('paginationDIV_code').style.display = "block";
        document.getElementById('toggleEyeIcon_pagination').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_pagination').style.display = "none";
    } else {
        document.getElementById('paginationDIV_code').style.display = "none";
        document.getElementById('toggleEyeIcon_pagination').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_pagination').style.display = "block";
    }
}

//toggleEye for Patrient Header Band-1 12
function toggleEye_HeaderBand_1() {
    var x = document.getElementById("patientHeader_band1_code");
    if (x.style.display === "none") {
        document.getElementById('patientHeader_band1_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_headerBand1').style.display = "block";
        document.getElementById('toggleEyeIcon_headerBand1').style.display = "none";
    } else {
        document.getElementById('patientHeader_band1_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_headerBand1').style.display = "none";
        document.getElementById('toggleEyeIcon_headerBand1').style.display = "block";
    }
}

//toggleEye for Patrient Header Band-2 13
function toggleEye_HeaderBand_2() {
    var x = document.getElementById("Pat_HeaderBand2_code");
    if (x.style.display === "none") {
        document.getElementById('Pat_HeaderBand2_code').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_headerBand2').style.display = "block";
        document.getElementById('toggleEyeIcon_headerBand2').style.display = "none";
    } else {
        document.getElementById('Pat_HeaderBand2_code').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_headerBand2').style.display = "none";
        document.getElementById('toggleEyeIcon_headerBand2').style.display = "block";
    }
}

//toggleEye for DIV Slot Container 14
function toggleReviewData_divSlot() {
    var x = document.getElementById("divSlot_code");
    if (x.style.display === "none") {
        document.getElementById('divSlot_code').style.display = "block";
        document.getElementById('toggleEyeIcon_divSlot').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_divSlot').style.display = "none";
    } else {
        document.getElementById('divSlot_code').style.display = "none";
        document.getElementById('toggleEyeIcon_divSlot').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_divSlot').style.display = "block";
    }
}

//toggleEye for DIV Slot Container 15
function toggleReviewData_thumbnailView() {
    var x = document.getElementById("divSlot_thumbnailView");
    if (x.style.display === "none") {
        document.getElementById('divSlot_thumbnailView').style.display = "block";
        document.getElementById('toggleEyeIcon_thumbnailView').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_thumbnailView').style.display = "none";
    } else {
        document.getElementById('divSlot_thumbnailView').style.display = "none";
        document.getElementById('toggleEyeIcon_thumbnailView').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_thumbnailView').style.display = "block";
    }
}

//thumbnail scroll left right
function scrollLeftSlide(){
    $('#scroll_imgSlider').animate({ scrollLeft: "-=240px" }, "fast");
}

function scrollRightSlide(){
    $('#scroll_imgSlider').animate({ scrollLeft: "+=240px" }, "fast");
}

// Copied successfully Popup
function copyText(id) {
    var code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(function() {
        showPopup("Code copied successfully !");
    }, function() {
        showPopup("Failed to copy code !");
    });
}

function showPopup(message) {
    var popup = document.getElementById("copiedPopup");
    popup.textContent = message;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, 2000);
}

// Copied to clipboard
function copyClipboardText(id) {
    var code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(function() {
        showCopyMsgPopup("Code copied successfully !");
    }, function() {
        showCopyMsgPopup("Failed to copy code !");
    });
}

function showCopyMsgPopup(message) {
    var popup = document.getElementById("copiedPopupMsg");
    popup.textContent = message;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, 2000);
}

// Toggle Dialog box
function showDialogBox() {
    var x = document.getElementById("dialogBoxDIV");
    if (x.style.display === "none") {
        document.getElementById('dialogBoxDIV').style.display = "block";
    } else {
        document.getElementById('dialogBoxDIV').style.display = "none";
    }
}

// Switchable tabs
function toggleSwitchableTabs(com){
    var myData = new Array();
    myData[0] = 'tab_1';
    myData[1] = 'tab_2';

    var myData1 = new Array();
    myData1[0] = 'data_1';
    myData1[1] = 'data_2';

    for(var i=0 ; i < myData.length ; i++){
        if(com.id == myData[i]){
            $('#'+myData[i]).removeClass("med_commonTab");
            $('#'+myData[i]).addClass("med_commonTab-active");
            document.getElementById(myData1[i]).style.display = 'block';
        }else{
            $('#'+myData[i]).removeClass("med_commonTab-active");
            $('#'+myData[i]).addClass("med_commonTab");
            document.getElementById(myData1[i]).style.display = 'none';
        }
    }
}

// Switchable tabs V2
function toggleSwitchableTabs_v2(com){
    var myData = new Array();
    myData[0] = 'tab_1_v2';
    myData[1] = 'tab_2_v2';

    var myData1 = new Array();
    myData1[0] = 'data_1_v2';
    myData1[1] = 'data_2_v2';

    for(var i=0 ; i < myData.length ; i++){
        if(com.id == myData[i]){
            $('#'+myData[i]).removeClass("med_commonTab_v2");
            $('#'+myData[i]).addClass("med_commonTab-active_v2");
            document.getElementById(myData1[i]).style.display = 'block';
        }else{
            $('#'+myData[i]).removeClass("med_commonTab-active_v2");
            $('#'+myData[i]).addClass("med_commonTab_v2");
            document.getElementById(myData1[i]).style.display = 'none';
        }
    }
}

// Switchable vertical tabs
function toggleVerticalTabs(com){
    var myData = new Array();
    myData[0] = 'tabVertical_1';
    myData[1] = 'tabVertical_2';
    myData[2] = 'tabVertical_3';

    var myData1 = new Array();
    myData1[0] = 'dataVertical_1';
    myData1[1] = 'dataVertical_2';
    myData1[2] = 'dataVertical_3';

    for(var i=0 ; i < myData.length ; i++){
        if(com.id == myData[i]){
            $('#'+myData[i]).removeClass("med_commonTabVertical");
            $('#'+myData[i]).addClass("med_commonTabVertical-active");
            document.getElementById(myData1[i]).style.display = 'block';
        }else{
            $('#'+myData[i]).removeClass("med_commonTabVertical-active");
            $('#'+myData[i]).addClass("med_commonTabVertical");
            document.getElementById(myData1[i]).style.display = 'none';
        }
    }
}

// Toggle screen web and print view
function toggleWebPrint(com){
    var myData = new Array();
    myData[0] = 'webTabDIV';
    myData[1] = 'printTabDIV';

    var myData1 = new Array();
    myData1[0] = 'webDataDIV';
    myData1[1] = 'printDataDIV';

    for(var i=0 ; i < myData.length ; i++){
        if(com.id == myData[i]){
            $('#'+myData[i]).removeClass("tabWebPrint");
            $('#'+myData[i]).addClass("tabWebPrint-active");
            document.getElementById(myData1[i]).style.display = 'block';
            document.getElementById('showForWeb').style.display = 'none';
            document.getElementById('showForPrint').style.display = 'block';
        }else{
            $('#'+myData[i]).removeClass("tabWebPrint-active");
            $('#'+myData[i]).addClass("tabWebPrint");
            document.getElementById(myData1[i]).style.display = 'none';
            document.getElementById('showForWeb').style.display = 'block';
            document.getElementById('showForPrint').style.display = 'none';

        }
    }
}

// Toggle screen web and print view
function toggleHtmlPrint(com) {
    var tabs = ['htmlTabDIV', 'printviewTabDIV'];
    var content = ['showForhtml', 'showForPrintview'];

    for (var i = 0; i < tabs.length; i++) {
        var tabElement = document.getElementById(tabs[i]);
        var contentElement = document.getElementById(content[i]);

        if (com.id === tabs[i]) {
            tabElement.classList.remove("tabHtmlPrint");
            tabElement.classList.add("tabHtmlPrint-active");
            contentElement.style.display = 'block';
        } else {
            tabElement.classList.remove("tabHtmlPrint-active");
            tabElement.classList.add("tabHtmlPrint");
            contentElement.style.display = 'none';
        }
    }
}

//Star Rating
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.med_star-rating .med_star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = Number(star.dataset.value);

            stars.forEach(s => s.classList.toggle('med_activeStar', Number(s.dataset.value) <= value));
        });
    });
});

//Toggle Star
function toggleStar() {
    var element = document.getElementById("toggleStarFilter");
    element.classList.toggle("fa-star");
    element.classList.toggle("fa-star-o");
}

// popup container
function openPopupSM(){
    document.getElementById('popup_sm').style.display = 'block';
}
function closePopupSM(){
    document.getElementById('popup_sm').style.display = 'none';
}

function openPopupMD(){
    document.getElementById('popup_md').style.display = 'block';
}
function closePopupMD(){
    document.getElementById('popup_md').style.display = 'none';
}

function openPopupLG(){
    document.getElementById('popup_lg').style.display = 'block';
}
function closePopupLG(){
    document.getElementById('popup_lg').style.display = 'none';
}

function openPopupFS(){
    document.getElementById('popup_fs').style.display = 'block';
}
function closePopupFS(){
    document.getElementById('popup_fs').style.display = 'none';
}

function openPopupSider(){
    document.getElementById('popup_side').style.display = 'block';
    document.getElementById("webMiddleDataDIV").style.display = 'none';
}
function closePopupSider(){
    document.getElementById('popup_side').style.display = 'none';
    document.getElementById("webMiddleDataDIV").style.display = 'block';
    
}

//Alert popup container
function openAlertPopupSuccess(){
    document.getElementById('popup_success').style.display = 'block';
}
function closeAlertPopupSuccess(){
    document.getElementById('popup_success').style.display = 'none';
}

function openAlertPopupError(){
    document.getElementById('popup_error').style.display = 'block';
}
function closeAlertPopupError(){
    document.getElementById('popup_error').style.display = 'none';
}

function openAlertPopupInformation(){
    document.getElementById('popup_information').style.display = 'block';
}
function closeAlertPopupInformation(){
    document.getElementById('popup_information').style.display = 'none';
}

// Drawer open from left
function openLeftDrawer() {
    const drawerLeft = document.getElementById('drawerLeft');
    document.getElementById('openLeftDrawer').style.display = 'block';

    drawerLeft.classList.add('med_open');
}

function closeLeftDrawer() {
    const drawerLeft = document.getElementById('drawerLeft');
    document.getElementById('openLeftDrawer').style.display = 'block';

    drawerLeft.classList.remove('med_open');
}

// Drawer open from right
function openRightDrawer() {
    const drawerRight = document.getElementById('drawerRight');
    document.getElementById('openRightDrawer').style.display = 'block';

    drawerRight.classList.add('med_open');
}

function closeRightDrawer() {
    const drawerRight = document.getElementById('drawerRight');
    document.getElementById('openRightDrawer').style.display = 'block';

    drawerRight.classList.remove('med_open');
}

// Toggle filter
function OpenToggleRightDrawer() {
    var x = document.getElementById("toggleRightDrawer");
    if (x.style.display === "none") {
        document.getElementById('toggleRightDrawer').style.display = "block";
    } else {
        document.getElementById('toggleRightDrawer').style.display = "none";
    }
}

function closeToggleRightDrawer() {
    document.getElementById('toggleRightDrawer').style.display = "none";
}


// progress bar
function openProgressBar(){
    document.getElementById('progress_bar').style.display = 'block';
}
function closeProgressBar(){
    document.getElementById('progress_bar').style.display = 'none';
}

//fade success
function fadeSlideUpDIVInterval_success(){
    $('#topSuccessMsgDIV').fadeTo(3500, 500).fadeOut(500, function() {

    });
}

function showTopSuccessMsg(){
    fadeSlideUpDIVInterval_success('topSuccessMsgDIV')
}

function hideTopSuccessMsg(){
    document.getElementById('topSuccessMsgDIV').style.display = 'none';
}

//fade error
function fadeSlideUpDIVInterval_error(){
    $('#topErrorMsgDIV').fadeTo(3500, 500).fadeOut(500, function() {

    });
}

function showTopErrorMsg(){
    fadeSlideUpDIVInterval_error('topErrorMsgDIV')
}

function hideTopErrorMsg(){
    document.getElementById('topErrorMsgDIV').style.display = 'none';
}

//fade information
function fadeSlideUpDIVInterval_info(){
    $('#topInfoMsgDIV').fadeTo(3500, 500).fadeOut(500, function() {

    });
}

function showTopInfoMsg(){
    fadeSlideUpDIVInterval_info('topInfoMsgDIV')
}

function hideTopInfoMsg(){
    document.getElementById('topInfoMsgDIV').style.display = 'none';
}

//Search List
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//
window.addEventListener('mouseup',function(event){
    var searchList = document.getElementById('myUL');
    if(event.target != searchList && event.target.parentNode != searchList){
        searchList.style.display = 'none';
    }
});

//
window.addEventListener('mouseup',function(event){
    var searchList = document.getElementById('searchList');
    if(event.target != searchList && event.target.parentNode != searchList){
        searchList.style.display = 'none';
    }
});

//tiny mc
tinymce.init({
    selector: 'textarea#basic-example',
    plugins: [
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
        'anchor', 'pagebreak', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'help', 'wordcount', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | blocks | styles | ' +
    'bold italic underline forecolor backcolor emoticons | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | link Image | print preview media fullscreen | ' +
    'removeformat | help',
    menu: {
        favs: {title: 'menu', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

//For draggable popup
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = elmnt.querySelector(".med_header_draggable");
    (header || elmnt).onmousedown = (e) => {
        e.preventDefault();
        pos3 = e.clientX; pos4 = e.clientY;
        document.onmouseup = () => document.onmousemove = null;
        document.onmousemove = (e) => {
            pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
            pos3 = e.clientX; pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        };
    };
}

document.querySelectorAll(".med_commonPopup_draggable").forEach(elmnt => {
    dragElement(elmnt);
});



//toggleEye for Company header
function toggleReviewData_companyHeader() {
    var x = document.getElementById("companyHeaderDiv");
    if (x.style.display === "none") {
        document.getElementById('companyHeaderDiv').style.display = "block";
        document.getElementById('toggleEyeIcon_companyHeader').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_companyHeader').style.display = "none";
    } else {
        document.getElementById('companyHeaderDiv').style.display = "none";
        document.getElementById('toggleEyeIcon_companyHeader').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_companyHeader').style.display = "block";
    }
}

//toggleEye for zoomIO_imgDiv
function toggleReviewData_zoomIO_img() {
    var x = document.getElementById("zoomIO_imgDiv");
    if (x.style.display === "none") {
        document.getElementById('zoomIO_imgDiv').style.display = "block";
        document.getElementById('toggleEyeIcon_zoomIOimg').style.display = "block";
        document.getElementById('toggleEyeIcon_slash_zoomIOimg').style.display = "none";
    } else {
        document.getElementById('zoomIO_imgDiv').style.display = "none";
        document.getElementById('toggleEyeIcon_zoomIOimg').style.display = "none";
        document.getElementById('toggleEyeIcon_slash_zoomIOimg').style.display = "block";
    }
}

// code for Comapany header slot
function toggleSidebar() {
    const sidebar = document.querySelector('.med_left-sidebar');
    sidebar.classList.toggle('med_collapsed');

    const links = document.querySelectorAll('#med_leftNavigation li a');
    links.forEach(link => {
        const outerDiv = link.querySelector('.med_outer-div');
        if (sidebar.classList.contains('med_collapsed')) {
            outerDiv.classList.add('med_expand_tooltip_style');
            document.getElementById('collapseLeftMenuIcon').style.transform = "rotate(-180deg)";
        } else {
            outerDiv.classList.remove('med_expand_tooltip_style');
            document.getElementById('collapseLeftMenuIcon').style.transform = "rotate(0deg)";
        }
    });
    
}

function toggleSubMenu(event) {
    const menuItem = event.target.closest('.menu-item');
    const submenu = menuItem.querySelector('.submenu');
    const allSubmenus = document.querySelectorAll('#med_leftNavigation .submenu');

    allSubmenus.forEach(item => {
        if (item !== submenu) {
            item.classList.remove('open');
            const toggleIcon = item.closest('.menu-item').querySelector('.med_submenu-toggle');
            if (toggleIcon) toggleIcon.classList.remove('rotate');
        }
    });

    submenu.classList.toggle('open');
    const icon = menuItem.querySelector('.med_submenu-toggle');
    icon.classList.toggle('rotate');
}

function highlightActive(event) {
    // Remove active class from all menu and submenu items
    const allMenuItems = document.querySelectorAll('#med_leftNavigation > li');
    const allSubMenuItems = document.querySelectorAll('.submenu li');

    allMenuItems.forEach(item => item.classList.remove('menu-active'));
    allSubMenuItems.forEach(item => item.classList.remove('submenu-active'));

    const clickedItem = event.target.closest('li');

    if (clickedItem.parentElement.classList.contains('submenu')) {
        // If a submenu item is clicked, add 'submenu-active' to it
        clickedItem.classList.add('submenu-active');

        // Also activate the parent menu item
        const parentMenuItem = clickedItem.closest('.menu-item');
        if (parentMenuItem) {
            parentMenuItem.classList.add('menu-active');
        }
    } else {
        // If a menu item is clicked, only activate it
        clickedItem.classList.add('menu-active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('#med_leftNavigation li a');
    allLinks.forEach(link => {
        link.addEventListener('click', highlightActive);
    });
});



//code for white theme
function toggleSidebar_white() {
    const sidebar = document.querySelector('.med_left-sidebar_white');
    sidebar.classList.toggle('med_collapsed');

    const links = document.querySelectorAll('#med_leftNavigation_white li a');
    links.forEach(link => {
        const outerDiv = link.querySelector('.med_outer-div');
        if (sidebar.classList.contains('med_collapsed')) {
            outerDiv.classList.add('med_expand_tooltip_style');
            document.getElementById('collapseLeftMenuIcon_white').style.transform = "rotate(-180deg)";
        } else {
            outerDiv.classList.remove('med_expand_tooltip_style');
            document.getElementById('collapseLeftMenuIcon_white').style.transform = "rotate(0deg)";
        }
    });
    
}

function toggleSubMenu_white(event) {
    const menuItem = event.target.closest('.menu-item');
    const submenu = menuItem.querySelector('.submenu');
    const allSubmenus = document.querySelectorAll('#med_leftNavigation_white .submenu');

    allSubmenus.forEach(item => {
        if (item !== submenu) {
            item.classList.remove('open');
            const toggleIcon = item.closest('.menu-item').querySelector('.med_submenu-toggle');
            if (toggleIcon) toggleIcon.classList.remove('rotate');
        }
    });

    submenu.classList.toggle('open');
    const icon = menuItem.querySelector('.med_submenu-toggle');
    icon.classList.toggle('rotate');
}

function highlightActive_white(event) {
    // Remove active class from all menu and submenu items
    const allMenuItems = document.querySelectorAll('#med_leftNavigation_white > li');
    const allSubMenuItems = document.querySelectorAll('.submenu li');

    allMenuItems.forEach(item => item.classList.remove('menu-active'));
    allSubMenuItems.forEach(item => item.classList.remove('submenu-active'));

    const clickedItem = event.target.closest('li');

    if (clickedItem.parentElement.classList.contains('submenu')) {
        // If a submenu item is clicked, add 'submenu-active' to it
        clickedItem.classList.add('submenu-active');

        // Also activate the parent menu item
        const parentMenuItem = clickedItem.closest('.menu-item');
        if (parentMenuItem) {
            parentMenuItem.classList.add('menu-active');
        }
    } else {
        // If a menu item is clicked, only activate it
        clickedItem.classList.add('menu-active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('#med_leftNavigation_white li a');
    allLinks.forEach(link => {
        link.addEventListener('click', highlightActive_white);
    });
});

//User toggle panel white
function toggleUser_white() {
    var x = document.getElementById("toggleUserDialog_white");
    if (x.style.display === "none") {
        document.getElementById('toggleUserDialog_white').style.display = "block";
        document.getElementById('userSlotHeader_white').style.transform = "rotate(-180deg)";
    } else {
        document.getElementById('toggleUserDialog_white').style.display = "none";
        document.getElementById('userSlotHeader_white').style.transform = "rotate(0deg)";
    }
}


// code for Zoom In/Out Image Slot
let scale = 1, pointX = 0, pointY = 0, start = { x: 0, y: 0 }, panning = false, originalScale = 1;
function manageZoomInOut(imageID, zoomInID, zoomOutID) {
    let imageEle = document.getElementById(imageID);
    let zoomIn = document.getElementById(zoomInID);
    let zoomOut = document.getElementById(zoomOutID);

    imageEle.addEventListener('mousedown', (event) => {
        event.preventDefault();
        start = { x: event.clientX - pointX, y: event.clientY - pointY };
        panning = true;
        imageEle.style.cursor = "grabbing";
    });

    imageEle.addEventListener('mouseup', () => {
        panning = false;
        imageEle.style.cursor = "default";
    });

    imageEle.addEventListener('mouseleave', () => {
        panning = false;
        imageEle.style.cursor = "default";
    });

    imageEle.addEventListener('mousemove', (event) => {
        if (!panning) return;
        event.preventDefault();
        pointX = event.clientX - start.x;
        pointY = event.clientY - start.y;
        setTransform();
    });

    zoomIn.addEventListener('click', () => {
        var factor = 1.2;
        scale = Math.min(scale * factor, 5);
        setTransform();
    });

    zoomOut.addEventListener('click', () => {
        var factor = 1 / 1.2;
        scale = Math.max(scale * factor, originalScale);
        if (scale === originalScale) {
            pointX = 0;
            pointY = 0;
        }
        setTransform();
    });
    resetZoom();
}

function setTransform() {
    // Constrain movement within zoom_outer bounds
    zoom = document.getElementById("imageArea");
    zoomOuter = document.querySelector(".med_zoom_outer");
    const zoomOuterRect = zoomOuter.getBoundingClientRect();
    const zoomRect = zoom.getBoundingClientRect();
    // Calculate max bounds for panning
    const maxTranslateX = Math.max(0, (zoomRect.width - zoomOuterRect.width) / 2);
    const maxTranslateY = Math.max(0, (zoomRect.height - zoomOuterRect.height) / 2);
    // Constrain pointX and pointY
    pointX = Math.min(maxTranslateX, Math.max(-maxTranslateX, pointX));
    pointY = Math.min(maxTranslateY, Math.max(-maxTranslateY, pointY));
    zoom.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function resetZoom() {
    scale = 1, pointX = 0, pointY = 0;
    setTransform();
}



//dropdown text and background change

function selectWorkingCompany_white(selectedCompany, selectedColor = '') {
    // Get the dropdown label and its text span
    const dropdownHeader = document.querySelector('.med_companyHeaderDropdownLabel_white');
    const displayLabel = document.getElementById('selectedCompanyHeader_white');

    // Update the displayed company name
    displayLabel.textContent = selectedCompany;

    // Apply the selected color if provided
    if (selectedColor) {
        dropdownHeader.style.backgroundColor = selectedColor;
    } else {
        dropdownHeader.style.backgroundColor = '#1E88E5'; // Default color
    }
}

document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace with the actual raw URL to your zip file
    const zipFileUrl = 'https://github.com/mednetOakland/UI-UX-Components-1/raw/ad93f4c5429d5f38713acc14cc3a824669dcb85f/tinymce.zip';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = zipFileUrl;
    link.download = 'tinymce.zip'; // Optionally, specify the name of the file
    
    // Trigger a click event on the link to start the download
    link.click();
});







