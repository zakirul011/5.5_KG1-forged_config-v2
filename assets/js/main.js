(function ($) {
   "use strict";

   /*=========================
	PRELOADER JS
	===========================*/
   $(window).on("load", function (event) {
      $(".preloader").delay(500).fadeOut(500);
   });


window.addEventListener('load', ()=>{

   
   // CUSTOM JS


   // color changing 
   // selector
   let counter = 0;
   const nextBtn = document.querySelectorAll('.next-btn') //next btn
   const prevBtn = document.querySelectorAll('.prev-btn') //previous btn
   const colorNameSelect = document.querySelectorAll('.color-name-item') //name catagory
   const singleColorPanal = document.querySelectorAll('.single-color-panal') // color panal

   const desktopPriceText = document.querySelector('.desktop-content-wrapper .price-text') //price text of desktop version
   const previewImg = document.querySelector('.preview-img img') //img where preview img will show
   const colorItem = document.querySelectorAll('.color-panal ul li') //colors
   const wheelPartsWrap = document.querySelectorAll('.wheel-parts-wrap') // window parts img parent
   const priceWrapper = document.querySelectorAll('.price-wrapper') // single-price-text

   const pageIndecatorCounter = document.querySelectorAll('.page-indecator span:first-child') // page counter line parent
   const indecators = document.querySelectorAll('.indecator') // page counter line

   // demo-content
   const demoColor = document.querySelectorAll('.demo-color-panal ul li')
   const demoNextBtn = document.querySelector('.demo-next-btn')
   const selectCounter = document.querySelector('.demo-color-title span')
   const previewSelectedColor = document.querySelector('.preview-selected-color ul')
   const nextpageSelectedColor = document.querySelector('.nextpage-selected-color')

   //new-pager-counter
   const pageCounterList = document.querySelectorAll('.page-counter ul li')
   const pageCounterListWrap = document.querySelectorAll('.page-counter ul')
   const pageCounterSlide = document.querySelector('.page-counter-slide')

   //page counte slider
   const counterPrev = document.querySelectorAll('.counter-prev')
   const counterNext = document.querySelectorAll('.counter-next')
   const responsiveCounterSlide = document.querySelector('.responsive-page-counter .page-counter-slide')

   //arrow shape 
   const arrowShape = document.querySelectorAll('.single-arrow-shape')

   //error
   const errorWrapper = document.querySelector('.errow-wrapper')


   const PageLength = wheelPartsWrap.length;

   // form page selectors
   const wheelAllPartsWrapper = document.querySelector('.config-wheel')
   const wheelAllImg = document.querySelectorAll('.wheel-parts-wrap img')
   const lastPreviewWheel = document.querySelector('.last-preview-wheel')
   const imgData = document.querySelector('.img_data')
   const colorNameHolderInput = document.querySelectorAll('.color_name_holder')
   let finalColors = [];
     
   //header button click to show color panal 1st page
   const chooseColorText = document.querySelector('.choose-color-text')
   const demoNameTab = document.querySelector('.demo-name-tab')
   const placeholderLogoimg = document.querySelector('.placeholder-logo-img')
   chooseColorText.addEventListener('click', ()=>{
      placeholderLogoimg.style.animation = '.1s ease fadeOut';
      placeholderLogoimg.addEventListener('animationend', ()=>{
         placeholderLogoimg.style.display = 'none';
         demoNameTab.style.display = 'flex';
      })
   })

   //when click add a height to demo color panal to lock good 
   const demoTabItems = document.querySelector('.demo-tab-items')
   const demoTablist = document.querySelectorAll('.demo-name-tab a')
   const demoLeft = document.querySelector('.demo-left')
   demoTablist.forEach( list=>{
     list.addEventListener('click', ()=>{
       demoTabItems.style.minHeight = '200px';
       demoLeft.style.maxHeight = '1500px'
     })
   })
   
   //new-page-counter clicking event
   pageCounterList.forEach((list) => {
      list.addEventListener('click', ()=>{
               const pageListIndex =  Array.from(list.parentNode.children).indexOf(list)

               // check all prev page color seleted or not then allow to go other page
               let allcolorActiveParent;
               let x = 0;
               for (let i = 0; i < pageListIndex; i++) {
                  allcolorActiveParent = document.querySelectorAll(`.single-color-panal:nth-child(${i + 1}) ul li`)
                  allcolorActiveParent.forEach(color => {
                     if (color.classList.contains('active')) {
                        x++
                        return;
                     }
                  });
               }
               if (x == pageListIndex) {
                  //increase counter
                  counter = pageListIndex;
               }else{
                  errorWrapper.style.display = 'block';
                  errorWrapper.children[2].style.display = 'flex';
               }

               // removing active class
               for (let i = 0; i < colorNameSelect.length; i++) {
                  colorNameSelect[i].classList.remove('active')
               }
               for (let i = 0; i < singleColorPanal.length; i++) {
                  singleColorPanal[i].classList.remove('active')
               }
               for (let i = 0; i < priceWrapper.length; i++) {
                  priceWrapper[i].classList.remove('active')
               }
               for (let i = 0; i < arrowShape.length; i++) {
                  arrowShape[i].classList.remove('active')
               }

               //show next color-name and color-panal on cliking next btn
               colorNameSelect[counter].classList.add('active')
               singleColorPanal[counter].classList.add('active')
               priceWrapper[counter].classList.add('active')
               arrowShape[counter].classList.add('active')

               //new-page-counter
               pageCounterListWrap.forEach(listWrap => {
                  for (let i = 0; i < listWrap.children.length; i++) {
                     listWrap.children[i].classList.remove('show-title')
                  }
                  for (let i = 0; i < listWrap.children.length; i++) {
                     listWrap.children[i].classList.remove('active')
                  }
                  for (let i = 0; i < counter + 1; i++) {
                     listWrap.children[i].classList.add('active')
                  }
                  listWrap.children[counter].classList.add('show-title')
                  
               });

      })
   });
   

   //new page counter slider
      //page counte slider
   let pageSliderCounter = 0;
   function pageCounterSlider() {
      counterNext[0].addEventListener('click',()=>{
         if (pageSliderCounter < 5) {
            pageSliderCounter++;
            const counterListHeight = pageCounterList[0].clientHeight + 5;
            pageCounterList[0].parentElement.style.transform = `translateY(-${counterListHeight * pageSliderCounter}px)`
         }
      })
      counterPrev[0].addEventListener('click',()=>{
         if (pageSliderCounter > 0) {
            pageSliderCounter--;
            const counterListHeight = pageCounterList[0].clientHeight + 5;
            pageCounterList[0].parentElement.style.transform = `translateY(-${counterListHeight * pageSliderCounter}px)`
         }
      })
   } pageCounterSlider();

   //page counte slider responsive
   let pageSliderCounter2 = 0;
   function pageCounterSlider2() {
      counterNext[1].addEventListener('click',()=>{
         if (pageSliderCounter2 < 7) {
            pageSliderCounter2++;
            const responsiveListWidth = responsiveCounterSlide.children[0].children[0].clientWidth + 2;
            responsiveCounterSlide.children[0].style.transform = `translateX(-${responsiveListWidth * pageSliderCounter2}px)`
         }
      })
      counterPrev[1].addEventListener('click',()=>{
         if (pageSliderCounter2 > 0) {
            pageSliderCounter2--;
            const responsiveListWidth = responsiveCounterSlide.children[0].children[0].clientWidth + 2;
            responsiveCounterSlide.children[0].style.transform = `translateX(-${responsiveListWidth * pageSliderCounter2}px)`
         }
      })
   } pageCounterSlider2();

   //demo-content-function 
   let activeDemoColor = [] //empty array
   const catagoryCountColor = document.querySelectorAll('.demo-name-tab a span')

   demoColor.forEach((color) => {
      color.addEventListener('click', ()=>{

         let colorIndex =  Array.from(color.parentNode.children).indexOf(color)// index of color
         let colorTabIndex =  Array.from(color.parentElement.parentElement.parentElement.parentElement.children).indexOf(color.parentElement.parentElement.parentElement)// index of color parent
         let selectedColor = document.querySelectorAll(`.color-panal:nth-child(${colorTabIndex + 1}) ul li:nth-child(${colorIndex + 1})`) //selected color of next pages
         let selectedColorPanal = document.querySelectorAll(`.color-panal:nth-child(${colorTabIndex + 1})`) //selected color of next pages

         //check if has active class already or not
         if (color.classList.contains('active')) {
            color.classList.remove('active');
            //In next page remove if color unactive
            selectedColor.forEach(color => {
               color.classList.remove('show-demo')
            });

            //take the number of counter in cataagory color select
            let calaNumcounter = parseInt(catagoryCountColor[colorTabIndex].innerHTML)
            calaNumcounter--;
            if (calaNumcounter == 0) {
               catagoryCountColor[colorTabIndex].style.display = 'none'
            }
            catagoryCountColor[colorTabIndex].innerHTML = calaNumcounter;

         } else {
            if (activeDemoColor.length == 2) {
               //when more then 3 color want to select get error
               errorWrapper.style.display = 'block';
               errorWrapper.children[1].style.display = 'flex';
               errorWrapper.children[0].style.display = 'none';
               errorWrapper.children[1].style.animation = '.3s ease errorCome';

               return
            }

            color.classList.add('active')
            //at next page the selected color will show
            selectedColor.forEach(color => {
               color.classList.add('show-demo')
            });

            //take the number of counter in cataagory color select
            let calaNumcounter = parseInt(catagoryCountColor[colorTabIndex].innerHTML)
            calaNumcounter++;
            if (calaNumcounter !== 0) {
               catagoryCountColor[colorTabIndex].style.display = 'inline-block'
            }
            catagoryCountColor[colorTabIndex].innerHTML = calaNumcounter;

         }

         //popup animation to color counter in catagory
         catagoryCountColor[colorTabIndex].style.animation = '.2s ease pop';
         catagoryCountColor[colorTabIndex].addEventListener('animationend',()=>{
            catagoryCountColor[colorTabIndex].style.animation = '';
         })


         //take and array of active color
         activeDemoColor = []
         for (let i = 0; i < demoColor.length; i++) {
           if ( demoColor[i].classList.contains('active')) {
              activeDemoColor.push( demoColor[i].cloneNode())
           }
         }

         previewSelectedColor.innerHTML = '';
         for (let i = 0; i < activeDemoColor.length; i++) {
            previewSelectedColor.appendChild(activeDemoColor[i]);
         }

         // nextPageshowColors
         const nextPageshowColors = document.querySelectorAll('.color-panal ul li.show-demo')
         nextPageshowColors.forEach(color => {
            color.addEventListener('click', ()=>{
               let getNewArrayColor = []
               for (let i = 0; i < color.parentElement.parentElement.parentElement.children.length; i++) {
                  for (let j = 0; j < color.parentElement.parentElement.parentElement.children[i].children[0].children.length; j++) {
                    if ( color.parentElement.parentElement.parentElement.children[i].children[0].children[j].classList.contains('show-demo')) {
                     getNewArrayColor.push(color.parentElement.parentElement.parentElement.children[i].children[0].children[j]);
                    }
                     
                  }
               }
               if (getNewArrayColor.indexOf(color) == 0) {
                   // parent-selector
                  let parentOfColor = color.parentElement.parentElement;
                  let parentParentOfColor = parentOfColor.parentElement.parentElement;
                  let colorParentIndex =  Array.from(parentOfColor.parentNode.children).indexOf(parentOfColor)
                  let parentParentOfColorIndex =  Array.from(parentParentOfColor.parentNode.children).indexOf(parentParentOfColor)
                  let colorIndex =  Array.from(color.parentNode.children).indexOf(color)

                  // remove active class form inner parent wheel parts
                  for (let i = 0; i < wheelPartsWrap[parentParentOfColorIndex].children.length; i++) {
                     for (let j = 0; j < wheelPartsWrap[parentParentOfColorIndex].children[i].children.length; j++) {
                        wheelPartsWrap[parentParentOfColorIndex].children[i].children[j].classList.remove("color-1");
                     }
                  }
                  //remove active class form inner parent priceWrapper 
                  for (let i = 0; i < priceWrapper[parentParentOfColorIndex].children.length; i++) {
                     for (let j = 0; j < priceWrapper[parentParentOfColorIndex].children[i].children.length; j++) {
                        priceWrapper[parentParentOfColorIndex].children[i].children[j].classList.remove("color-1");
                     }
                  }
                  
                  // add active class accourding to color click index
                  wheelPartsWrap[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].classList.add('color-0');
                  priceWrapper[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].classList.add('color-0');
                  
               } else {
                   // parent-selector
                   let parentOfColor = color.parentElement.parentElement;
                   let parentParentOfColor = parentOfColor.parentElement.parentElement;
                   let colorParentIndex =  Array.from(parentOfColor.parentNode.children).indexOf(parentOfColor)
                   let parentParentOfColorIndex =  Array.from(parentParentOfColor.parentNode.children).indexOf(parentParentOfColor)
                   let colorIndex =  Array.from(color.parentNode.children).indexOf(color)

                   // remove active class form inner parent wheel parts
                   for (let i = 0; i < wheelPartsWrap[parentParentOfColorIndex].children.length; i++) {
                     for (let j = 0; j < wheelPartsWrap[parentParentOfColorIndex].children[i].children.length; j++) {
                        wheelPartsWrap[parentParentOfColorIndex].children[i].children[j].classList.remove("color-0");
                     }
                  }
                  //remove active class form inner parent priceWrapper 
                  for (let i = 0; i < priceWrapper[parentParentOfColorIndex].children.length; i++) {
                     for (let j = 0; j < priceWrapper[parentParentOfColorIndex].children[i].children.length; j++) {
                        priceWrapper[parentParentOfColorIndex].children[i].children[j].classList.remove("color-0");
                     }
                  }
                  
                  // add active class accourding to color click index
                  wheelPartsWrap[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].classList.add('color-1');
                  priceWrapper[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].classList.add('color-1');
               }
               
            })
         });


         //next page show the selected color
         if (activeDemoColor == '') {
            selectedColorPanal.forEach(color => {
               color.classList.remove('active')
            });
         }else{
            selectedColorPanal.forEach(color => {
               color.classList.add('active')
            });
         }

         //pop animation
         selectCounter.style.animation = '.2s ease-in pop';
         //show the counter of selection
         selectCounter.innerHTML = activeDemoColor.length;

      })
     
   });

   let imgschange0 = []
   let imgschange1 = []

   //demo 1st page next btn clicking event
   demoNextBtn.addEventListener('click', ()=>{
     const page0 = document.querySelector("#page-0")
     const page1 = document.querySelector("#page-1")
     if ( activeDemoColor.length == 0) {
         errorWrapper.style.display = 'block';
         errorWrapper.children[1].style.display = 'none';
         errorWrapper.children[0].style.display = 'flex';
         errorWrapper.children[0].style.animation = '.3s ease errorCome';
     }else{
      page0.style.display = 'none';
      page1.style.display = 'block';
     }

      //page counte slider
      const counterListHeight = pageCounterList[0].clientHeight + 5;
      pageCounterSlide.style.height = `${counterListHeight * 8}px`;

      const responsiveListWidth = responsiveCounterSlide.children[0].children[0].clientWidth + 2;
      responsiveCounterSlide.style.width = `${responsiveListWidth * 6}px`;

      //nextpageSelectedColor
      nextpageSelectedColor.innerHTML = previewSelectedColor.parentElement.innerHTML;

      //nextpageSelectedColor clicking event
      for (let i = 0; i < nextpageSelectedColor.children[1].children.length; i++) {
         nextpageSelectedColor.children[1].children[i].addEventListener('click', ()=>{
            page0.style.display = 'block';
            page1.style.display = 'none';

            //prev changing selected color
            imgschange0 = []
            imgschange1 = []
     
            for (let i = 0; i < PageLength; i++) {

               for (let j = 0; j <  wheelPartsWrap[i].children.length; j++) {
                  for (let k = 0; k <  wheelPartsWrap[i].children[j].children.length; k++) {
                     if ( wheelPartsWrap[i].children[j].children[k].classList.contains('color-0')) {
                        imgschange0.push(wheelPartsWrap[i].children[j].children[k])
                     }else if (wheelPartsWrap[i].children[j].children[k].classList.contains('color-1')) {
                        imgschange1.push(wheelPartsWrap[i].children[j].children[k])
                     }
                  }
               }

            }


         })
      }


         const demoColor = document.querySelectorAll('.demo-color-panal ul li.active')
         const nextAllColor = document.querySelectorAll('.color-panal-wrap li')

         nextAllColor.forEach(color => {
            color.classList.remove('active')
         });

         let imgsChange = [imgschange0 , imgschange1]
         for (let i = 0; i < demoColor.length; i++) {
            
            let parentOfColorIndex =  Array.from(demoColor[i].parentElement.parentElement.parentElement.parentNode.children).indexOf(demoColor[i].parentElement.parentElement.parentElement)
            let colorIndex =  Array.from(demoColor[i].parentNode.children).indexOf(demoColor[i])
   
            for (let j = 0; j < imgsChange[i].length; j++) {
   
              imgsChange[i][j].classList.remove('active');
              imgsChange[i][j].classList.remove(`color-${i}`);
   
               let imgParentParentIndex = Array.from(imgsChange[i][j].parentElement.parentElement.parentElement.children).indexOf(imgsChange[i][j].parentElement.parentElement)
   
               let selectedImg = document.querySelector(`.wheel-parts-wrap:nth-child(${imgParentParentIndex + 1}) .wheel-parts:nth-child(${parentOfColorIndex + 1}) img:nth-child(${colorIndex + 1})`) //

               let selectedColor = document.querySelector(`.single-color-panal:nth-child(${imgParentParentIndex + 1}) .color-panal:nth-child(${parentOfColorIndex + 1}) ul li:nth-child(${colorIndex + 1})`)
   
               selectedColor.classList.add('active')

              
               selectedImg.classList.add('active')
               selectedImg.classList.add(`color-${i}`)
               
            }
            
         }



     // indicator indicate the 1st page
      indecators.forEach(indecator => {
         indecator.style.width = `${indecator.parentElement.clientWidth / PageLength * 1}px`;
      });

   })



            

   //next prev btn clicking functions 
   function nextPrevItems() {
      nextBtn.forEach(next => {
         next.addEventListener('click', ()=>{
            
            // active parent color to check if color has active class when next btn click
            let allcolorActiveParent = document.querySelectorAll(`.single-color-panal:nth-child(${counter + 1}) ul li`)
            let x ;
            x = 0
            allcolorActiveParent.forEach(color => {
               if (color.classList.contains('active')) {
                  x = 1
                  return;
               }
            });
            if (x == 1) {
               //increase counter
               counter++;
            }else{
               errorWrapper.style.display = 'block';
               errorWrapper.children[2].style.display = 'flex';
            }

            // if page reach PageLength th page go to contact form
            if (counter == PageLength) {
               //final img show after clicking qoute btn
               getColorNames();
               finalWheelImg()
               document.querySelector('#page-1').style.display = 'none'
               document.querySelector('#page-2').style.display = 'block';
            }
                  
            //show next color name and color panal on cliking next btn
            if (counter < PageLength) {
               // removing active class
               for (let i = 0; i < colorNameSelect.length; i++) {
                  colorNameSelect[i].classList.remove('active')
               }
               for (let i = 0; i < singleColorPanal.length; i++) {
                  singleColorPanal[i].classList.remove('active')
               }
               for (let i = 0; i < priceWrapper.length; i++) {
                  priceWrapper[i].classList.remove('active')
               }
               for (let i = 0; i < arrowShape.length; i++) {
                  arrowShape[i].classList.remove('active')
               }
               
               //show next color-name and color-panal on cliking next btn
               colorNameSelect[counter].classList.add('active')
               singleColorPanal[counter].classList.add('active')
               priceWrapper[counter].classList.add('active')
               arrowShape[counter].classList.add('active')

                //new-page-counter
                pageCounterListWrap.forEach(listWrap => {
                  for (let i = 0; i < listWrap.children.length; i++) {
                     listWrap.children[i].classList.remove('show-title')
                  }
                  for (let i = 0; i < listWrap.children.length; i++) {
                     listWrap.children[i].classList.remove('active')
                  }
                  for (let i = 0; i < counter + 1; i++) {
                     listWrap.children[i].classList.add('active')
                  }
                  listWrap.children[counter].classList.add('show-title')
               });

                


            }

            // page indetor function here
               if (counter < PageLength) {
                  indecators.forEach(indecator => {
                     indecator.style.width = `${indecator.parentElement.clientWidth / PageLength * (counter + 1)}px`;
                  });
               }else{
                  if (counter < PageLength) {
                     indecators.forEach(indecator => {
                        indecator.style.width = `${indecator.parentElement.clientWidth / PageLength * (counter + 1)}px`;
                     });
                  }
               }

            pageIndecatorCounter.forEach(idecatorCounter => {
               if (counter < PageLength) {
                  idecatorCounter.innerHTML = `0${counter + 1}`;
                  idecatorCounter.style.animation = '.3s ease pop';
               }else{
                  if (counter < PageLength) {
                     idecatorCounter.innerHTML = `${counter + 1}`;
                     idecatorCounter.style.animation = '.3s ease pop';
                  }
               }
            });

            // when go to 2nd page show the prev btn
            prevBtn.forEach(preBtn => {
               preBtn.style.display = 'inline-block';
            });

            //page-counte-slider
            if (counter > Math.floor(PageLength / 2) && counter < PageLength) {
                  pageSliderCounter = Math.floor(PageLength / 3)
                  const counterListHeight = pageCounterList[0].clientHeight +  Math.floor(PageLength / 3);
                  pageCounterList[0].parentElement.style.transform = `translateY(-${counterListHeight * pageSliderCounter}px)`;
            }
            //responsive-counte-slider
            if (counter >  Math.floor(PageLength / 3)) {
               if (pageSliderCounter2 <  Math.floor(PageLength / 2)) {
                  pageSliderCounter2++;
                  const responsiveListWidth = responsiveCounterSlide.children[0].children[0].clientWidth + 2;
                  responsiveCounterSlide.children[0].style.transform = `translateX(-${responsiveListWidth * pageSliderCounter2}px)`
               }
            }

            
           

         })
      });

       //prev btn clicking functions
      prevBtn.forEach(prev => {
         prev.addEventListener('click', ()=>{

            //decreasing counter value
            counter--;

            if (counter < 0) {
               const page0 = document.querySelector("#page-0")
               const page1 = document.querySelector("#page-1")
               page0.style.display = 'block';
               page1.style.display = 'none';

               counter = 0
            }

             // removing active class -- 
             for (let i = 0; i < colorNameSelect.length; i++) {
               colorNameSelect[i].classList.remove('active')
            }
            for (let i = 0; i < singleColorPanal.length; i++) {
               singleColorPanal[i].classList.remove('active')
            }
            for (let i = 0; i < priceWrapper.length; i++) {
               priceWrapper[i].classList.remove('active')
            }
            for (let i = 0; i < arrowShape.length; i++) {
               arrowShape[i].classList.remove('active')
            }

            //show previous color-name and color-panal on cliking prev btn
            colorNameSelect[counter].classList.add('active')
            singleColorPanal[counter].classList.add('active')
            priceWrapper[counter].classList.add('active')
            arrowShape[counter].classList.add('active')

             //new-page-counter
             pageCounterListWrap.forEach(listWrap => {
               for (let i = 0; i < listWrap.children.length; i++) {
                  listWrap.children[i].classList.remove('show-title')
               }
               for (let i = 0; i < listWrap.children.length; i++) {
                  listWrap.children[i].classList.remove('active')
               }
               for (let i = 0; i < counter + 1; i++) {
                  listWrap.children[i].classList.add('active')
               }
               listWrap.children[counter].classList.add('show-title')
               
            });

            //decrease the width of indecator line
            indecators.forEach(indecator => {
               
               indecator.style.width = `${indecator.parentElement.clientWidth / PageLength * (counter + 1)}px`;
            });

            //decrease the value of indecator
            pageIndecatorCounter.forEach(idecatorCounter => {
               if (counter < 9) {
                  idecatorCounter.innerHTML = `0${counter + 1}`
                  idecatorCounter.style.animation = '.3s ease pop';
               }else{
                  idecatorCounter.innerHTML = `${counter + 1}`
                  idecatorCounter.style.animation = '.3s ease pop';
               }
            });

            
            //page counter slider
            if (counter < 5) {
               pageSliderCounter = 0;
               const counterListHeight = pageCounterList[0].clientHeight + 5;
               pageCounterList[0].parentElement.style.transform = `translateY(-${counterListHeight * pageSliderCounter}px)`
            }

            //horizontal-slider
            if (pageSliderCounter2 > 0) {
               pageSliderCounter2--;
               const responsiveListWidth = responsiveCounterSlide.children[0].children[0].clientWidth + 2;
               responsiveCounterSlide.children[0].style.transform = `translateX(-${responsiveListWidth * pageSliderCounter2}px)`
            }

           

         })
      });
   }; nextPrevItems();

 


   //revert color functions
   const revertColorBtn = document.querySelector('.revert-color-btn button')
   document.querySelectorAll('.single-color-panal:nth-child(2) ul li').forEach(color =>{
      color.addEventListener('click', ()=>{
         revertColorBtn.parentElement.classList.add('active')
      })
   })

   revertColorBtn.addEventListener('click', ()=>{
      //change the text when click
      if (revertColorBtn.innerHTML == 'Invert') {
         revertColorBtn.innerHTML = 'Revert';
      } else {
         revertColorBtn.innerHTML = 'Invert';
      }

      let allSelectedImg0= document.querySelectorAll('img.color-0')
      let allSelectedImg1 = document.querySelectorAll('img.color-1')

      for (let i = 0; i < allSelectedImg0.length; i++) {
         for (let j = 0; j < allSelectedImg1.length; j++) {
            
            allSelectedImg0[i].classList.remove('active')
            allSelectedImg0[i].classList.remove('color-0')
            
            let imgparentparentindex0 =  Array.from(allSelectedImg0[i].parentElement.parentElement.parentElement.children).indexOf(allSelectedImg0[i].parentElement.parentElement)

            let imgindex1 = Array.from(allSelectedImg1[j].parentElement.children).indexOf(allSelectedImg1[j]);
            let imgParentindex1 = Array.from(allSelectedImg1[j].parentElement.parentElement.children).indexOf(allSelectedImg1[j].parentElement);

            allSelectedImg0[i].parentElement.parentElement.parentElement.children[imgparentparentindex0].children[imgParentindex1].children[imgindex1].classList.add('active')
            allSelectedImg0[i].parentElement.parentElement.parentElement.children[imgparentparentindex0].children[imgParentindex1].children[imgindex1].classList.add('color-0')

            allSelectedImg1[j].classList.remove('active')
            allSelectedImg1[j].classList.remove('color-1')

            let imgparentparentindex1 =  Array.from(allSelectedImg1[j].parentElement.parentElement.parentElement.children).indexOf(allSelectedImg1[j].parentElement.parentElement)

            let imgindex0 = Array.from(allSelectedImg0[i].parentElement.children).indexOf(allSelectedImg0[i]);
            let imgParentindex0 = Array.from(allSelectedImg0[i].parentElement.parentElement.children).indexOf(allSelectedImg0[i].parentElement);

            allSelectedImg1[j].parentElement.parentElement.parentElement.children[imgparentparentindex1].children[imgParentindex0].children[imgindex0].classList.add('active')

            allSelectedImg1[j].parentElement.parentElement.parentElement.children[imgparentparentindex1].children[imgParentindex0].children[imgindex0].classList.add('color-1')
            
         }

         
      }

   })


// first action to do 

desktopPriceText.innerHTML = document.querySelector('.single-price-text .price-text.active').innerHTML;
//price text fade animation when end
desktopPriceText.addEventListener('animationend', ()=>{
   desktopPriceText.style.animation = '';
})
//indecator popup animation when end
pageIndecatorCounter.forEach(idecatorCounter => {
   idecatorCounter.addEventListener('animationend', ()=>{
      idecatorCounter.style.animation = '';
   })
});

//selectCounter popup animation when end
selectCounter.addEventListener('animationend', ()=>{
   selectCounter.style.animation = '';
})

// show 1st parts img as preview
previewImg.src = document.querySelector('.config-wheel > img').src;


// first action end



// color clicking actions
colorItem.forEach(color => {
   color.addEventListener('click',()=>{
      
         
      // parent-selector
      let parentOfColor = color.parentElement.parentElement;
      let parentParentOfColor = parentOfColor.parentElement.parentElement;
      let colorParentIndex =  Array.from(parentOfColor.parentNode.children).indexOf(parentOfColor)
      let parentParentOfColorIndex =  Array.from(parentParentOfColor.parentNode.children).indexOf(parentParentOfColor)
      let colorIndex =  Array.from(color.parentNode.children).indexOf(color)

      // remove-form-inner-parent-color
      for (let i = 0; i < parentOfColor.parentElement.children.length; i++) {
         for (let j = 0; j < parentOfColor.parentElement.children[i].children[0].children.length; j++) {
            parentOfColor.parentElement.children[i].children[0].children[j].classList.remove("active");
         }
      }

      // remove active class form inner parent wheel parts
      for (let i = 0; i < wheelPartsWrap[parentParentOfColorIndex].children.length; i++) {
         for (let j = 0; j < wheelPartsWrap[parentParentOfColorIndex].children[i].children.length; j++) {
            wheelPartsWrap[parentParentOfColorIndex].children[i].children[j].classList.remove("active");
         }
      }
      //remove active class form inner parent priceWrapper 
      for (let i = 0; i < priceWrapper[parentParentOfColorIndex].children.length; i++) {
         for (let j = 0; j < priceWrapper[parentParentOfColorIndex].children[i].children.length; j++) {
            priceWrapper[parentParentOfColorIndex].children[i].children[j].classList.remove("active");
         }
      }
      //add active class to clicking color
      color.classList.add('active')
      
      // add active class accourding to color click index
      wheelPartsWrap[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].classList.add('active');
      priceWrapper[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].classList.add('active');

      //add img source to preview img
      previewImg.src = wheelPartsWrap[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].src;

      //add price text to price area of desktop div
      desktopPriceText.innerHTML = priceWrapper[parentParentOfColorIndex].children[colorParentIndex].children[colorIndex].innerHTML;
      desktopPriceText.style.animation = '.3s ease fadeEffect';


   })
});



 // tab
 function tab() {
    
   const colorNameSelect = document.querySelectorAll('.color-name-select ul li')
   const singleColorPanal = document.querySelectorAll('.single-color-panal')

   colorNameSelect.forEach(name => {
      name.addEventListener('click', ()=>{
         const parentOfColorName = name.parentElement.parentElement;
         let colorNameParentIndex =  Array.from(parentOfColorName.parentNode.children).indexOf(parentOfColorName)
         let colorNameIndex =  Array.from(name.parentNode.children).indexOf(name)


         for (let i = 0; i < name.parentElement.children.length; i++) {
            name.parentElement.children[i].classList.remove('active')
         }
         name.classList.add('active')
         
         for (let i = 0; i < singleColorPanal[colorNameParentIndex].children[1].children.length; i++) {
            singleColorPanal[colorNameParentIndex].children[1].children[i].classList.remove("active");
         }
         singleColorPanal[colorNameParentIndex].children[1].children[colorNameIndex].classList.add('active')

      })
   });

 };tab();


   // share-btn-popup
   function shareBtnPopup() {
      const shareBtn = document.querySelectorAll('.share-btn')
      const popupLinks = document.querySelector('.popup-links')
      const fullOverlay = document.querySelectorAll('.full-overlay')
      shareBtn.forEach(btn => {
         btn.addEventListener('click', ()=>{
               popupLinks.classList.add('active')
               fullOverlay.classList.add('active')
         })
      });
      fullOverlay.forEach(overlay => {
         overlay.addEventListener('click', ()=>{
               popupLinks.classList.remove('active')
               overlay.classList.remove('active')
         })
      });
   };shareBtnPopup();

//qoute btn clicking function
   const formPrevBtn = document.querySelector('.form-prev-btn button')
   //go prev PageLength page when click form prev btn
   formPrevBtn.addEventListener('click', ()=>{
      const page2 = document.querySelector('#page-2')
      const page1 = document.querySelector('#page-1')
      page2.style.display = 'none';
      page1.style.display = 'block';
      counter = PageLength - 1
   })

   // get color_name into input hidden   
   function getColorNames() {
      finalColors = [];
      // get final color
      colorItem.forEach(color => {
         if (color.classList.contains('active')) {
            finalColors.push(color)
         }
      });
      // assign to input the color name
      for (let i = 0; i < finalColors.length; i++) {
         let colorName = finalColors[i].getAttribute('data-original-title')
         colorNameHolderInput[i].value = colorName
      }

   }
   function finalWheelImg() {
      $(".preloader").delay(500).fadeIn(500);
      wheelAllImg.forEach(img => {
         img.removeAttribute('data-html2canvas-ignore')
         if (img.classList.contains('active')) {
         }else{
            img.setAttribute('data-html2canvas-ignore', 'true')
         }
      });
      window.scrollTo(0,0)
      html2canvas(document.querySelector("#capture"),
         {
            removeContainer: false,
            imageTimeout: '0',
            onclone: function () {
            }
         }
      ).then(canvas => {
         $(".preloader").delay(500).fadeOut(500);
         imgData.value = canvas.toDataURL('image/jpeg', .8);
         console.log(canvas.toDataURL('image/jpeg', .8));
      });
   }

   document.querySelector('.get').addEventListener('click', ()=>{
      finalWheelImg()
   })



})//window load fanction end






  // tooltip
  $(function () {
      $('[data-toggle="tooltip"]').tooltip();
   });

	   //responsive-menu
   function responsiveMenu() {
      const openMenuIcon = document.querySelector(".header-icons a:nth-child(5)");
      const header = document.querySelector(".header-area");
      const overlay = document.querySelector(".overlay-menu");
      openMenuIcon.addEventListener("click", () => {
         if (header.classList.contains("active-menu")) {
            header.classList.remove("active-menu");
            openMenuIcon.classList.remove("active");
         } else {
            header.classList.add("active-menu");
            openMenuIcon.classList.add("active");
         }
      });
      overlay.addEventListener("click", () => {
         header.classList.remove("active-menu");
         openMenuIcon.classList.remove("active");
      });
      };responsiveMenu();


   // add navication number
   const pageCounterSlide = document.querySelectorAll('.page-counter-slide ul')

   pageCounterSlide.forEach(CounterSlide => {
      for (let i = 0; i < CounterSlide.children.length; i++) {
         let getSpan = document.createElement('SPAN')
         getSpan.innerText = i + 1;
         CounterSlide.children[i].appendChild(getSpan)
      }
   });


   // count page
   let pagecounter =  document.querySelectorAll('.pageAllCount')
   pagecounter.forEach(counter => {
      counter.innerText = document.querySelector('.color-picker-wrap').children.length
   });
   

})(jQuery);


   // not allow to get code
   // document.addEventListener('contextmenu', function(e) {
   //    e.preventDefault();
   // });
   // document.onkeydown = function (e) {
   //    if (event.keyCode == 123) {
   //       return false;
   //    }
   //    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
   //       return false;
   //    }
   //    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
   //       return false;
   //    }
   //    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
   //       return false;
   //    }
   //    if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
   //       return false;
   //    }
   //    if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
   //       return false;
   //    }
   // }


   