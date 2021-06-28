$(document).ready(function () {
	
    let menuList;
    let aboutList;
    let eduList;
    let projetsList;
    let refList;
    let scopeList;
    let skillsList;
    let logoList = [];
    let videoList;
    let id;
    let containerWidth;
    let selectedLanguage;
    let details;
    let selectedMenu;
    let logoLoop;
    let loadedLogo;
    
    checkCookie();
	
    const loadData = () => new Promise((resolve, reject) => {
    	$("body").css("cursor", "progress");
        const xhr = new XMLHttpRequest();
		if (selectedLanguage == "polish"){
			xhr.open("GET", "http://" + window.location.host + "/menu_polish");
		}else{
			xhr.open("GET", "http://" + window.location.host + "/menu_english");
		}
        //xhr.open("GET", "http://" + window.location.host + "/menu");
        xhr.addEventListener('load', () => resolve(xhr.responseText));
        xhr.send();
    });

    loadData().then(result => {
    	menuList = JSON.parse(result);
    	menuList.sort(function(a,b){
    		return a.level - b.level;
    	});
    	createMainMenuButtons();
        //setOnClickEventToMainPictures();
        //setMouseOverrAndOutEventsToMainPictures();
        $("body").css("cursor", "default");
    });
    
    function createMainMenuButtons(){
    	
    	for (let i = 0; i < menuList.length; i++){
    			
			let newDiv = document.createElement("div");
			let newOuterDiv = document.createElement("div");
			let newImg = document.createElement("img");
			newImg.classList.add("menuPicture");
			newImg.setAttribute("src", "img/" + menuList[i].graphic);
			
			console.log(selectedLanguage);
//			if (selectedLanguage == "polish"){
//				newDiv.innerHTML = menuList[i].titlePL;
//			}else{
//				newDiv.innerHTML = menuList[i].titleEN;
//			}
			console.log(menuList);
			newDiv.innerHTML = menuList[i].title;
			
			newDiv.appendChild(newImg);
			newDiv.setAttribute("value", menuList[i].idmenu);
			//newDiv.classList.add("col-12");
			newDiv.classList.add("menu", "p-5", "mb-5");
			newDiv.id = menuList[i].tag
			newOuterDiv.appendChild(newDiv);
			
			if (menuList[i].level == 1){
				newOuterDiv.classList.add("col-sm-6", "pb-3");
				$("#level1").append(newOuterDiv);
			}else{
				newOuterDiv.classList.add("col-sm-4","col-md-12", "pb-3");
				//newOuterDiv.appendChild(newDiv);
				$("#level2").append(newOuterDiv);
			}
			
    	}
    	showMenuElements();
    	setOnClickEvents();
    	
    }
    
    function showMenuElements(){
    	for (let i=0; i < $(".menu").length; i++){
    		$(".menu").eq(i).delay(i * 300).show(1500, function(){
    			$(".menu").eq(i).children("img").slideDown(500);
    		});
    	}
    }
    
    function clearDetailsWindow(){
    	$("#details").children().each(function(){
    		console.log(this.id);
    		if (this.id != "return"){
    			this.remove();
    		}
    	});
    	logoList = [];
    	//$("#details").empty();
    }
    
    function hideMenuAndShowDetailsWindow(){
    	$("#menuContainer").slideUp(300, function(){
    		loadDetailsData();
    		$("#details").slideDown(500);
    	});
    }
    
    function showMenuAndHideDetailsWindow(){
    	$("#details").slideUp(300, function(){
    		clearInterval(logoLoop);
    		clearDetailsWindow();
    		$("#menuContainer").slideDown(500);
    	});
    }
    
    $("#return").click(showMenuAndHideDetailsWindow);
    
    function setOnClickEvents(){
    		$(".menu").click(function(){
        		//console.log(this.id);
        		switch (this.id){
        		case "skills":
        			getTitle(2);
        			break;
        		case "education":
        			loadEduData();
        			break;
        		case "scope":
        			loadScopeData();
        			break;
        		case "projects":
        			loadProjectsData();
        			break;
        		case "develop":
        			loadDevelopData();
        			break;
        		case "site":
        			loadSiteData();
        			break;
        		case "codewars":
        			loadCodeData();
        			break;
        		case "references":
        			loadRefData();
        			break;
        		case "youtube":
        			loadYoutubeData();
        			break;				
	    		case "about":
	    			loadAboutData();
	    			break;				
	    		}
        		console.log(this.getAttribute("value"));
        		selectedMenu = this.getAttribute("value");
        		hideMenuAndShowDetailsWindow();
        	});

    }
    
    function loadDetailsData(){
        const loadDetails = () => new Promise((resolve, reject) => {
        	$("body").css("cursor", "progress");
            const xhr = new XMLHttpRequest();
            console.log("http://" + window.location.host + "/details_polish" + selectedMenu);
            if (selectedLanguage == "polish"){
            	xhr.open("GET", "http://" + window.location.host + "/details_polish?id=" + selectedMenu);
            }else{
            	xhr.open("GET", "http://" + window.location.host + "/details_english?id=" + selectedMenu);
            }
            xhr.addEventListener('load', () => resolve(xhr.responseText));
            xhr.send();
        });

        loadDetails().then(result => {
        	details = JSON.parse(result);
        	$("body").css("cursor", "default");
        	console.log(details);
        	insertDetailsDataToPage();
        });
    }
    
//    function getTitle(id){
//        const loadTitle = () => new Promise((resolve, reject) => {
//        	$("body").css("cursor", "progress");
//            const xhr = new XMLHttpRequest();
//            console.log("http://" + window.location.host + "/title" + id);
//            xhr.open("GET", "http://" + window.location.host + "/title?id=" + id);
//            xhr.addEventListener('load', () => resolve(xhr.responseText));
//            xhr.send();
//        });
//
//        loadTitle().then(result => {
//        	details = JSON.parse(result);
//        	$("body").css("cursor", "default");
//        	
//        	insertDetailsDataToPage();
//        });
//    }
    
    function insertDetailsDataToPage(){
    	
    	if (details.title != null && details.title != ""){
    		let title = document.createElement("div");
    		title.id = "title";
    		title.innerHTML = details.title;
    		$("#details").append(title);
    	}
    	
    	if (details.description != null && details.description != ""){
    		let description = document.createElement("div");
    		description.id = "description";
    		description.innerHTML = details.description;
    		$("#details").append(description);
    		//$("#description").html(details.description);
    	}
    	
    	if (details.listed.length > 0){
//    		let newRow = document.createElement("div");
//			newRow.classList.add("row");
    		
    		let listed = document.createElement("div");
    		listed.id = "listed";
    		listed.classList.add("row");
    		
    		
    		for (let i=0; i< details.listed.length; i++){
    			let newSubmenu = document.createElement("div");
    			//newSubmenu.classList.add("submenu");
    			newSubmenu.classList.add("col-md-2");
    			newSubmenu.innerHTML = details.listed[i].submenu;
    			listed.appendChild(newSubmenu);
    			
    			let newDescription = document.createElement("div");
    			//newDescription.classList.add("listedDescription");
    			newDescription.classList.add("col-md-5");
    			newDescription.innerHTML = details.listed[i].description;
    			listed.appendChild(newDescription);
    			
    			let newDocument = document.createElement("div");
    			//newDocument.classList.add("document");
    			newDocument.classList.add("col-md-5");
    			newDocument.innerHTML = details.listed[i].document;
    			listed.appendChild(newDocument);
    		}
    		//newRow.appendChild(listed);
    		$("#details").append(listed);
    	}
		
		if (details.skills.length){
			let newRow = document.createElement("div");
			newRow.classList.add("row");
			let buttonsElement = document.createElement("div");
			buttonsElement.classList.add("col-md-3");
			
    		let skills = document.createElement("div");
    		skills.id = "skills";
    		skills.classList.add("col-md-5");
    		//$("#details").append(skills);
    		
    		let buttons = document.createElement("div");
    		buttons.classList.add("col-md-2");
    		
    		
    		let itButton = document.createElement("div");
    		itButton.classList.add = "itButton";
    		itButton.innerHTML = "IT";
    		buttons.appendChild(itButton);
    		
    		let otherButton = document.createElement("div");
    		otherButton.classList.add = "itButton";
    		otherButton.innerHTML = "Other";
    		buttons.appendChild(otherButton);
    		
    		let itSkills = document.createElement("div");
    		itSkills.id = "itSkills";
    		itSkills.classList.add("col-md-12");
    		itSkills.classList.add("row");
    		
    		   		
    		newRow.appendChild(buttons);
			
			for (let i=0; i< details.skills.length; i++){
//				let newSubmenu = document.createElement("div");
//				newSubmenu.classList.add("submenu");
//				newSubmenu.innerHTML = details.skills[i].it;
//				$("#skills").append(newSubmenu);
				
				let newName = document.createElement("div");
				newName.classList.add("name");
				newName.classList.add("col-5");
				newName.innerHTML = details.skills[i].name;
				itSkills.appendChild(newName);
				
				let newLevel = document.createElement("div");
				newLevel.classList.add("level");
				newLevel.classList.add("col-7");
				for (let j=1; j<6; j++){
					if (j < details.skills[i].level){
						newLevel.innerHTML += '<i class="demo-icon icon-star"></i>'
					}else{
						newLevel.innerHTML += '<i class="demo-icon icon-star-empty"></i>'
					}
				}
				//newLevel.innerHTML = details.skills[i].level;
				itSkills.appendChild(newLevel);
				
				logoList.push(details.skills[i].logo)
			}
			
			let logoField = document.createElement("div");
			logoField.id = "logoField";
			logoField.classList.add("col-md-5");
			//logoField.innerHTML = details.skills[0].logo
			
			let logo1 = document.createElement("div");
			logo1.id = "logo1";
			logo1.classList.add("logoGallery");
			let url = 'url("img/' + details.skills[0].logo +'")';
			logo1.style.backgroundImage = url;
			logoField.appendChild(logo1);
			loadedLogo = 0;
			
			skills.appendChild(itSkills);
			newRow.appendChild(skills);
			newRow.appendChild(logoField);

			$("#details").append(newRow);
			//document.getElementById('logo1').style.left="-500px";
			//let currentWidth = document.getElementById('logoField').offsetWidth;
			//setInterval(function(){ document.getElementById('logo1').style.left = "-" + currentWidth + "px";}, 500);
			logoLoop = setInterval(function(){ 
				changeLogo(getNextLogo());
			}, 3000);
			setHoverEffect();
		}
		
    }
    
    function setHoverEffect(){
    	$(".name").mouseenter(function(){
    		console.log(this);
    		for (let i = 0; i<details.skills.length; i++){
    			if (this.innerHTML == details.skills[i].name){
    				loadedLogo = i;
    				changeLogo(logoList[i]);
    				clearInterval(logoLoop);
    			}
    		}
    		
    	});
    	$(".name").mouseleave(function(){
    		logoLoop = setInterval(function(){ 
				changeLogo(getNextLogo());
			}, 3000);
    	});
    }
    
    function getNextLogo(){
    	loadedLogo++;
    	if (loadedLogo >= logoList.length){
    		loadedLogo = 0;
    	}
    		
    	return logoList[loadedLogo];
    }
    
    function changeLogo(logoName){
    	let currentWidth = document.getElementById('logoField').offsetWidth;
    	let logo2 = document.createElement('div');
    	logo2.id = "logo2";
    	logo2.classList.add("logoGallery");
    	logo2.style.backgroundImage = 'url("img/' + logoName +'")';//details.skills[1].logo
    	logo2.style.left = currentWidth + "px";
    	document.getElementById("logoField").appendChild(logo2);
    	
    	setTimeout(function(){
    		document.getElementById('logo1').style.left = "-" + currentWidth + "px";
        	document.getElementById('logo2').style.left = "0px";
        	document.getElementById('logo1').id = "logoToDelete";
        	document.getElementById('logo2').id = "logo1";
        	document.getElementById('logoToDelete').remove;
    	})
    }
    
    function getListOfSkills(){
    	
    }
    
    function loadEduData(){
    	console.log("education");
    }
    
    function loadScopeData(){
    	console.log("scope");
    }
    
    function loadProjectsData(){
    	console.log("projects");
    }
    
    function loadDevelopData(){
    	console.log("develop");
    }
    
    function loadSiteData(){
    	console.log("site");
    }
    
    function loadCodeData(){
    	console.log("codewars");
    }
    
    function loadRefData(){
    	console.log("references");
    }
    
    function loadYoutubeData(){
    	console.log("youtube");
    }
    
    function loadAboutData(){
    	console.log("about");
    }
    
    function setCoockie(language){
    	let date = new Date();
    	date.setTime(date.getTime() + (24*60*60*1000));
    	let expires = "expires="+date.toUTCString();
    	document.cookie = "language=" + language + ";" + expires + ";path=/";
    }
    
    function getCookie(){
    	let name = "language=";
    	let decodedCookie = decodeURIComponent(document.cookie);
    	let cookiesList = decodedCookie.split(';');
    	for (let i=0; i < cookiesList.length; i++){
    		let singleValue = cookiesList[i];
    		while (singleValue.charAt(0) == ' '){
    			singleValue.substring(1);
    		}
    	    if (singleValue.indexOf(name) == 0) {
    	        return singleValue.substring(name.length, singleValue.length);
    	      }
    	}
    	return "";
    }
    
    function checkCookie() {
    	let previouslySelectedLanguage = getCookie();
    	console.log("test " + previouslySelectedLanguage);
    	if (previouslySelectedLanguage != "") {
    		console.log("ok");
    		selectedLanguage = previouslySelectedLanguage;
    	} else {
    		console.log("nok");
    		selectedLanguage = "polish";
    		showCookiePoupUp();
    	}
    }
    
    function showCookiePoupUp(){
    	$("footer").slideDown(500);
    }
    
    $("#closeCookie").click(function(){
    	console.log("close clicked");
    	$("footer").slideUp(500);
    });
    
    $("#acceptCookie").click(function(){
    	console.log("OK clicked");
    	console.log(selectedLanguage);
    	setCoockie(selectedLanguage);
    	$("footer").slideUp(500);
    });
    
    $("#polish").click(function(){
    	selectedLanguage = "polish";
    	if (getCookie() != ""){
    		setCoockie("polish");
    	}
    });
    
    $("#english").click(function(){
    	selectedLanguage = "english";
    	if (getCookie() != ""){
    		setCoockie("english");
    	}
    });
    
//    const loadMultiFieldsList = () => new Promise((resolve, reject) => {
//        const xhr = new XMLHttpRequest();
//        xhr.open("GET", "http://" + window.location.host + "/list");
//        xhr.addEventListener('load', () => resolve(xhr.responseText));
//        xhr.send();
//    });
//    
//    loadMultiFieldsList().then(result =>{
//    	listOfMultiFields = JSON.parse(result);
//    });
//    
//    const loadAllPictures = () => new Promise((resolve, reject) => {
//    	const xhr = new XMLHttpRequest();
//    	xhr.open("GET", "http://" + window.location.host + "/pictures");
//    	xhr.addEventListener('load', () => resolve(xhr.responseText));
//    	xhr.send();
//    });
//    
//    loadAllPictures().then(result => {
//    	listOfAllPictures = JSON.parse(result);
//    });
//    
//    $(".title").eq(0).slideDown(500, function(){
//    	$("#rekuperacja img").show(1000, function(){
//    		$(".title").eq(1).slideDown(500, function(){
//    			$("#konstrukcje img").show(1000);
//    		});
//    	});
//    });
//	
//    
//    function setOnClickEventToMainPictures(){
//	    $("#obrazRekuperacji").click(function () {
//	    	
//	        createMenuButtons(listOfRecuperationFields);
//	    	setOnClickEventsToCreatedElements();
//	        
//	        $("#konstrukcje").slideUp(200);
//	
//	        for (let i = 0; i < $(".menuRekuperacjiItem").length; i++) {
//	            let time = 300;
//	            setTimeout(function () {
//	                $(".menuRekuperacjiItem").eq(i).slideDown(time);
//	            }, i * time);
//	        }
//	
//	        $("#rekuperacja img").unbind('mousover').unbind('mouseout');
//	        
//	    	if ($(window).width() < 1000){
//	            $("#rekuperacja").animate({
//	                "top": "10%",
//	            }, 1000);
//	    	}else{
//	            $("#obrazRekuperacji").animate({
//	                "left": "60%",
//	            }, 1000);
//			}
//	
//	        $(this).unbind("click");
//	
//	
//	    });
//	    
//	    $("#konstrukcje").click(function () {
//	        createMenuButtons(listOfKonstructionFields);
//	    	setOnClickEventsToCreatedElements();
//	    	
//	        $("#rekuperacja").slideUp(200);
//
//	        for (let i = 0; i < $(".menuKonstrukcjiItem").length; i++) {
//	            let time = 300;
//	            setTimeout(function () {
//	                $(".menuKonstrukcjiItem").eq(i).slideDown(time);
//	            }, i * time);
//	        }
//
//	        $("#konstrukcje img").unbind('mousover').unbind('mouseout');
//
//	    	if ($(window).width() < 1000){
//	            $("#konstrukcje").animate({
//	                "top": "10%",
//	            }, 1000);
//	    	}else{
//	            $("#obrazKonstrukcji").animate({
//	                "right": "70%",
//	            }, 1000);
//			}
//
//	        $(this).unbind("click");
//
//	    });
//    }
//    
//    $("#logo").click(function(){
//    	location.reload();
//    })
//    
//    function setMouseOverrAndOutEventsToMainPictures(){
//	    $("#rekuperacja img").mouseover(function () {
//	        $("#konstrukcje img").css({
//	            "filter": "grayscale(100%)"
//	        })
//	        $(this).css({
//	            "cursor": "pointer",
//	            "transform": "scale(1.2)"
//	        }, 1000);
//	    });
//	
//	    $("#rekuperacja img").mouseout(function () {
//	        $(this).css({
//	            "transform": "scale(1)"
//	        }, 1000);
//	
//	        $("#konstrukcje img").css({
//	            "filter": "grayscale(0%)"
//	        })
//	    });
//	
//	    $("#konstrukcje img").mouseover(function () {
//	        $("#rekuperacja img").css({
//	            "filter": "grayscale(100%)"
//	        })
//	        $(this).css({
//	            "cursor": "pointer",
//	            "transform": "scale(1.2)"
//	        }, 1000);
//	    });
//	
//	    $("#konstrukcje img").mouseout(function () {
//	        $(this).css({
//	            "transform": "scale(1)"
//	        }, 1000);
//	
//	        $("#rekuperacja img").css({
//	            "filter": "grayscale(0%)"
//	        })
//	    });
//    }
//
//    function setOnClickEventsToCreatedElements(){
//    	
//    	let container;
//    	
//    	if ($(window).width() < 1000){
//    		container = $(".horizontalMenuItem");
//    	}else{
//			container = $(".menuItem");
//		}
//    		
//        for (let i = 0; i < container.length; i++){
//        	
//    		container.eq(i).click(function(){
//        		
//        		for (let j=0; j < details.length; j++){
//	        		if (this.getAttribute("value") == details[j].id){
//	        			id = j;
//	        		}
//        		}
//        		
//            	if (document.getElementById("details").style.display != 'none'){
//            		$("#details").slideUp(200, showHiddenWindow);
//            	}else{
//            		showHiddenWindow();
//            	}
//        	});
//        }
//    }
//
//    function setCurrentlySelectedSubject(id){
//
//    	listOfPicturesToDisplay = [];
//		deletePreviousContainer();
//		$("#title").html(details[id].title);
//		$("#title").attr("value", details[id].id);
//		$("#text").html(details[id].text);
//		$("#text").attr("value", details[id].id);
//		$("#movie").html(details[id].movie);
//		$("#movie").attr("value", details[id].id);
//		if (details[id].picture == "true"){
//			
//    		fillSelectedElement(document.getElementById("details"), document.getElementById("title").getAttribute("value"));
//			unhidePicturesContainer();
//			
//			setPicturesToDisplay(details[id].id);
//		}
//    }
//    
//    function setCurrentlySelectedList(id, position){
//		$("#title" + position).html(listOfMultiFields[id].title);
//		$("#text" + position).html(listOfMultiFields[id].text);
//		$("#movie" + position).html(listOfMultiFields[id].movie);
//    }
//
//    function showHiddenWindow(){
//    	clearListedFields();
//    	
//    	if (details[id].single == 1){
//    		setCurrentlySelectedSubject(id);
//    	}else{
//    		$("#title").html(details[id].title);
//    		
//    		let buttonDescription = details[id].id;
//    		
//    		for (let i = 0; i < listOfMultiFields.length; i++){
//    			if (listOfMultiFields[i].belongs == buttonDescription){
//    				let newDiv = document.createElement("div");
//    				newDiv.className = "listedElements";
//    				newDiv.setAttribute("value", listOfMultiFields[i].id);
//    				
//    				let titleDiv = document.createElement("div");
//    				titleDiv.className = "innerListedTitle";
//    				titleDiv.innerHTML = listOfMultiFields[i].title;
//    				titleDiv.setAttribute("value", listOfMultiFields[i].id);
//				
//    				let textDiv = document.createElement("div");
//    				textDiv.className = "innerListedElement";
//    				textDiv.innerHTML = listOfMultiFields[i].text;
//    				textDiv.setAttribute("value", listOfMultiFields[i].id);
//    				
//    				let movieDiv = document.createElement("div");
//    				movieDiv.className = "innerListedMovie";
//    				movieDiv.innerHTML = listOfMultiFields[i].movie;
//    				movieDiv.setAttribute("value", listOfMultiFields[i].id);
//    				
//    				newDiv.appendChild(titleDiv);
//    				newDiv.appendChild(textDiv);
//    				newDiv.appendChild(movieDiv);
//    				
//    				$("#details").append(newDiv);
//    				$("#text").html("");
//    				$("#movie").html("");
//
//    			}
//    			if (listOfMultiFields[i].picture == "true"){
//    				setOnClickEventsToListedElements(i, true);
//    			}else{
//    				setOnClickEventsToListedElements(i, false);
//    			}
//    		}
//    	}
//    	$("#details").slideDown(500);
//
//    }
//    
//    function clearListedFields(){
//    	for (let i = 0; i < $(".listedElements").length; i++){
//    		$(".listedElements").remove();
//    	}
//    }
// 
//    function goToNextPicture(){
//
//    	activateGalleryNavigation($("#previousPicture"));
//
//    	containerWidth = document.getElementById("galleryContainer").offsetWidth
//    	
//    	$("#picture1").attr("z-index", "10");
//    	$("#picture1").hide();
//    	$("#picture3").show();
//    	$("#picture3").attr("z-index", "20");
//    	$("#picture2").attr("z-index", "30");
//    	
//    	$("#picture3").css("left", containerWidth + "px");
//    	
//    	$("#picture2").stop().animate({
//    		left:"-" + containerWidth + "px",
//    	},500);
//
//    	$("#picture3").stop().animate({
//    		left:"0px",
//    	},500, function(){
//    		
//    		
//    		$("#picture2").attr("id", "picture1temp");
//    		$("#picture3").attr("id", "picture2");
//        	$("#picture1temp").attr("src", "img/" + listOfPicturesToDisplay[currentPictureLoaded]);
//        	$("#picture1").attr("id", "picture3");
//        	$("#picture1temp").attr("id", "picture1");
//        	$("#picture3").css("left", "0px");
//        	$("#picture1").css("left", "0px");
//        	if (currentPictureLoaded < listOfPicturesToDisplay.length - 2){
//        		$("#picture3").attr("src", "img/" + listOfPicturesToDisplay[currentPictureLoaded+2]);
//        	}
//        	
//        	$("#picture1").attr("z-index", "10");
//        	$("#picture3").attr("z-index", "20");
//        	$("#picture2").attr("z-index", "30");     	
//        	
//        	currentPictureLoaded++;
//        	
//        	if (currentPictureLoaded == listOfPicturesToDisplay.length - 1){
//        		deactivateGalleryNavigation($("#nextPicture"));
//        	}
//    	});
//    }
//
//    function goToPreviousPicture(){
//    	
//    	activateGalleryNavigation($("#nextPicture"));
//    	
//    	containerWidth = document.getElementById("galleryContainer").offsetWidth;
//    	$("#picture3").attr("z-index", "10");
//    	$("#picture3").hide();
//    	$("#picture1").show();
//    	$("#picture1").attr("z-index", "20");
//    	$("#picture2").attr("z-index", "30");
//    	
//    	$("#picture1").css("left", "-" + containerWidth + "px");
//    	$("#picture2").stop().animate({
//    		left: containerWidth + "px",
//    	},500);
//
//    	$("#picture1").stop().animate({
//    		left:"0px",
//    	},500, function(){
//    		
//        	$("#picture2").attr("id", "picture3temp");
//        	$("#picture1").attr("id", "picture2");
//        	$("#picture3").attr("id", "picture1");
//        	$("#picture3temp").attr("id", "picture3");
//        	
//    		if (currentPictureLoaded - 1> 0){
//    			$("#picture1").attr("src", "img/" + listOfPicturesToDisplay[currentPictureLoaded - 2]);
//    		}
//        	
//        	if (currentPictureLoaded < listOfPicturesToDisplay.length){
//        		$("#picture3").attr("src", "img/" + listOfPicturesToDisplay[currentPictureLoaded]);
//        	}
//        	
//        	$("#picture3").css("left", "0px");
//        	$("#picture1").css("left", "0px");
//        	
//        	$("#picture3").attr("z-index", "10");
//        	$("#picture1").attr("z-index", "20");
//        	$("#picture2").attr("z-index", "30");
//        	
//    		currentPictureLoaded--;
//        	
//        	if (currentPictureLoaded == 0){
//        		deactivateGalleryNavigation($("#previousPicture"));
//        	}      	
//    	});
//    }
//    
//    function deletePreviousContainer(){
//    	if ($("#galleryContainer").length){
//    		$("#galleryContainer").remove();
//    	}
//    }
//    
//    function fillSelectedElement(element, id){
//
//    	let container = document.createElement("div");
//    	container.setAttribute("id", "galleryContainer"); 
//    	container.setAttribute("value", id);
//    	
//    	let button1 = document.createElement("div");
//    	let button2 = document.createElement("div");
//    	
//    	button1.setAttribute("id", "nextPicture");
//    	button2.setAttribute("id", "previousPicture");
//    	
//    	button1.innerHTML = '<i class="demo-icon icon-right-open"></i>';
//    	button2.innerHTML = '<i class="demo-icon icon-left-open"></i>';
//
//    	container.appendChild(button1);
//    	container.appendChild(button2);
//    	
//    	for (let i = 1; i <= 3; i++){
//    		let newImg = document.createElement("img");
//    		newImg.setAttribute("class", "galleryElement");
//    		newImg.setAttribute("id", "picture" + i);
//    		newImg.setAttribute("width", "100%");
//    		container.appendChild(newImg);
//    	}
//    	
//    	element.appendChild(container);
//    	
//    	let description = $(element)
//		    .clone() 
//		    .children(".innerListedTitle")
//		    .attr("value");
//    	
//    	setPicturesToDisplay(description);	
//    }
//    
//    function activateGalleryNavigation(element){
//    	
//    	if (element.attr("id") == "nextPicture"){
//    		element.click(goToNextPicture);
//    	}else{
//    		element.click(goToPreviousPicture);
//    	}
//		
//        element.css({
//            "border": "black solid 1px",
//            "cursor": "pointer",
//            "color" : "black"
//        })
//		
//	    element.mouseover(function () {
//	        element.css({
//	            "background": "white",
//	        })
//	    });
//        
//	    element.mouseout(function () {
//	        element.css({
//	            "background": "none",
//	        })
//	    });
//    }
//    
//    function deactivateGalleryNavigation(element){
//    	
//		element.off("click");
//		
//	    element.unbind("mouseover mouseout");
//		
//        element.css({
//            "border": "gray solid 1px",
//            "cursor": "default",
//            "color" : "gray",
//            "background" : "none"
//        });
//    }
//    
//    function setOnClickEventsToListedElements(i, isPicture){
//    	
//			$(".innerListedTitle").eq(i).click(function(){
//
//				let valueOfClickedObject = this.getAttribute("value");
//				let clickedObject = this.parentElement;
//				
//				if (!$(this).parent().find("#galleryContainer").length){
//
//					if ($("#galleryContainer").length){
//            			$("#galleryContainer").slideUp(500);
//            			$(".galleryElement").slideUp(500);
//            			$("#previousPicture").slideUp(500);
//            			$("#nextPicture").slideUp(500,function(){
//            				deletePreviousContainer();
//            			});
//					}
//				}
//    			
//				if ($(this).parent().children(".innerListedElement").is(':visible')){
//    				$(this).parent().children(".innerListedElement").slideUp(500);
//    				$(this).parent().children(".innerListedMovie").slideUp(500);
//        			$("#galleryContainer").slideUp(500);
//        			$(".galleryElement").slideUp(500);
//        			$("#previousPicture").slideUp(500);
//        			$("#nextPicture").slideUp(500,function(){
//        				deletePreviousContainer();
//        			});
//
//				}else{
//        			$(".innerListedElement").slideUp(500);
//        			$(".innerListedMovie").slideUp(500);
//        			$(this).parent().children(".innerListedMovie").slideDown(500);
//        			$(this).parent().children(".innerListedElement").slideDown(500, function(){
//        				
//        				if (isPicture){
//        					
//        					let id = $("#galleryContainer").parent().attr("value");
//	        				fillSelectedElement(clickedObject, valueOfClickedObject);
//		        			$("#galleryContainer").slideDown(500);
//		        			$(".galleryElement").slideDown(500);
//		        			$("#previousPicture").slideDown(500);
//		        			$("#nextPicture").slideDown(500);
//        				}
//        			});
//
//				}
//			});
//    }
//    
//    function unhidePicturesContainer(){
//		$("#galleryContainer").show(500);
//		$(".galleryElement").show(500);
//		$("#previousPicture").show(500);
//		$("#nextPicture").show(500);
//    }
//    
//    function setPicturesToDisplay(desctiption){
//			listOfPicturesToDisplay = [];
//			for (let i = 0; i < listOfAllPictures.length; i++){
//
//				if (listOfAllPictures[i].belongs == desctiption){
//					listOfPicturesToDisplay.push(listOfAllPictures[i].picture);
//				}
//			}
//			$("#picture2").attr("src", "img/" + listOfPicturesToDisplay[0]);
//        	$("#picture2").css("left", "0px");
//			
//			if (listOfPicturesToDisplay.length > 1){
//				$("#picture3").attr("src", "img/" + listOfPicturesToDisplay[1]);
//	        	containerWidth = document.getElementById("galleryContainer").offsetWidth
//	        	$("#picture3").css("left", containerWidth + "px");
//	        
//			}
//			$("#picture1").attr("src", "");
//			currentPictureLoaded = 0;
//			
//	    	if (listOfPicturesToDisplay.length > 1){	    		
//	    		activateGalleryNavigation($("#nextPicture"));
//	    	}else{
//	    		deactivateGalleryNavigation($("#nextPicture"));
//	    	}
//    }
    
});
