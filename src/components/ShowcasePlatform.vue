<template>
    <main>
        <section>
            <div class="dlc-container">
                
                <section class="dlc-sticky" ref="sticky">
                    <nav>
                        <div class="dlc-logo">
                            <a href="#">Purple</a>
                        </div>
                        <div class="dlc-links">
                            <a href="#our-team" id="">Our Team</a>
                            <a href="#section-header">Components</a>
                            <DarkToggleMode class="dark-mode"></DarkToggleMode>
                        </div>
                    </nav>

                    <h5 class="dlc-sub-logo">× presents</h5>

                    <div class="dlc-header" >
                        <h1 class="animated-header-1">purple</h1>
                    </div>
                    
                    <div class="dlc-badge-container">
                        <h2 class="dlc-badge-name">chuu</h2>
                        <img src="../assets/public/chuu-light-badge.svg" alt="chuupurple">
                    </div>

                    <div class="dlc-tracker" ref="tracker">
                        <div class="dlc-emoji" ref="emoji">
                            <div class="dlc-emoji-face" ref="emojiFace">
                                <div class="dlc-eyes">
                                    <svg width="106" height="104" viewBox="0 0 106 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.0172 0H67.5889C70.4661 0 72.4739 2.84469 71.5039 5.54673L57.2205 45.3312L86.0692 15.6965C87.9916 13.7216 91.2739 14.1282 92.6537 16.5122L105.439 38.603C106.878 41.0886 105.412 44.2454 102.581 44.7585L62.6197 52L102.581 59.2415C105.412 59.7546 106.878 62.9114 105.439 65.397L92.6537 87.4878C91.2739 89.8718 87.9916 90.2784 86.0692 88.3035L56.3307 57.7547L67.9833 98.7195C68.7366 101.368 66.7424 104 63.9828 104H38.4111C35.5339 104 33.5261 101.155 34.4961 98.4533L48.7795 58.6688L19.9308 88.3035C18.0084 90.2784 14.7261 89.8718 13.3463 87.4878L0.560541 65.397C-0.878207 62.9114 0.587663 59.7546 3.4186 59.2415L43.3803 52L3.4186 44.7585C0.587663 44.2454 -0.878207 41.0886 0.560541 38.603L13.3463 16.5122C14.7261 14.1282 18.0084 13.7216 19.9308 15.6965L49.6693 46.2453L38.0167 5.28045C37.2634 2.63223 39.2576 0 42.0172 0Z" fill="black"/>
                                    </svg>
                                    <svg width="106" height="104" viewBox="0 0 106 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.0172 0H67.5889C70.4661 0 72.4739 2.84469 71.5039 5.54673L57.2205 45.3312L86.0692 15.6965C87.9916 13.7216 91.2739 14.1282 92.6537 16.5122L105.439 38.603C106.878 41.0886 105.412 44.2454 102.581 44.7585L62.6197 52L102.581 59.2415C105.412 59.7546 106.878 62.9114 105.439 65.397L92.6537 87.4878C91.2739 89.8718 87.9916 90.2784 86.0692 88.3035L56.3307 57.7547L67.9833 98.7195C68.7366 101.368 66.7424 104 63.9828 104H38.4111C35.5339 104 33.5261 101.155 34.4961 98.4533L48.7795 58.6688L19.9308 88.3035C18.0084 90.2784 14.7261 89.8718 13.3463 87.4878L0.560541 65.397C-0.878207 62.9114 0.587663 59.7546 3.4186 59.2415L43.3803 52L3.4186 44.7585C0.587663 44.2454 -0.878207 41.0886 0.560541 38.603L13.3463 16.5122C14.7261 14.1282 18.0084 13.7216 19.9308 15.6965L49.6693 46.2453L38.0167 5.28045C37.2634 2.63223 39.2576 0 42.0172 0Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="dlc-mouth-wrapper">
                                <div class="dlc-mouth"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- *** VENTURA COMPONENTS *** -->
                <section class="dlc-platform-content" ref="websiteContent">
                    <div class="dlc-section-header">
                        <h1 class="animated-text-1"><span class="animated-emphasization-10">Components</span> Crafted By...</h1>
                        <p class="animated-text-1">These components, <span class="animated-emphasization-10">lovingly created</span> by the team, beckon you to delve into a realm brimming with creativity and innovation. Embark on a journey of exploration filled with happiness and excitement, and <span class="animated-emphasization-10">uncover the enchantment</span> meticulously woven into every <span class="animated-emphasization-10">intricate detail</span>.</p>
                    </div>

                    <!-- *** GAB COMPONENTS *** -->
                    <div class="uniform-container">
                        <h2 class="presenter-header" id="animated-text-5"><span class="animated-emphasization">Gabriel</span> Ventura,</h2>
                            <h4 class="component-name" id="animated-text-5"><span class="animated-emphasization">Tabs</span> Component & <span class="animated-emphasization">Search Bar</span> Component 1</h4>
                                <div class="component-row">
                                    <div class="component-left">
                                        <TabsComponent/>
                                    </div>
                                    <div class="component-right">
                                        <SearchBarComponent class="search-bar-wrapper"/>
                                    </div>
                                </div>
                        
                            <div class="component-card-container">
                                <h4 class="component-name" id="animated-text-5"><span class="animated-emphasization">Cards</span> Component</h4>
                                <CardsComponent/>
                            </div>

                            <div class="component-countdown-wrapper">
                              <h3 class="countdown-numerator" id="animated-text-5">Twenty-Seven (27)</h3>
                                <span class="dlc-overline" id="animated-text"><span class="no-line-spacing">----------</span> components <span class="no-line-spacing">----------</span></span>
                              <h2 class="countdown-denominator" id="animated-text-5"><span class="animated-emphasization">Five (5)</span></h2>
                            </div>
                    </div>
                </section>

                <!-- ? CHECKPOINT 1 -->
                <section class="dlc-banner-1" id="animated-text-6">
  
                  <h1>More 
                      components, waiting to be <span class="animated-emphasization-1"> scrolled.</span></h1>
                </section>

                <!-- *** MIRABEL, CRUZ, FORTIN, SEMIFRANIA COMPONENTS -->
                <section class="dlc-platform-content-2" ref="websiteContent">
                  <div class="flex justify-content align-items">
                    <!-- ! LEFT -->
                    <div class="text-left mt-[10%] p-0 w-1/12">
                      <h2 class="writing-mode-vertical m-0 p-0 leading-0 text-[10rem] uppercase font-pp-bold" id="animated-text-7">
                        <span class="animated-emphasization-1">mirabel</span>
                      </h2>
                    </div>
                    
                    <!-- ? MIDDLE -->
                    <div class="main-content-wrap m-0 p-0 align-items w-10/12">
                      <div class="uniform-container">
                        <h2 class="presenter-header uppercase text-text-400" id="animated-text-2"><span class="animated-emphasization-1 ">Twenty-Two (22)</span> to be exact.</h2>
                        <div class="component-row">
                          <!-- *** MIRABEL COMPONENTS *** -->
                          <div class="component-left">
                            <div class="component-wrapper">
                              <h4 class="component-name" id="animated-text-5"><span class="animated-emphasization">Pagination</span></h4>
                              <MirabelPagination/>
                            </div>
                            
                            <div class="component-wrapper">
                                <h4 class="component-name" id="animated-text-5"><span class="animated-emphasization">Progress Bar</span> </h4>
                                <MirabelProgressBar/> 
                              </div>
                              
                              <div class="component-wrapper">
                                <h4 class="component-name mb-4" id="animated-text-5"><span class="animated-emphasization">Accordion</span> </h4>
                                <MirabelAccordion/>
                              </div>
                            </div>
                            
                            <!-- *** CRUZ COMPONENTS *** -->
                            <div class="component-right-2">
                              <h4 class="component-name mb-2" id="animated-text-5">
                                <span class="animated-emphasization-1">Notifications</span> &
                              </h4>
                              <CruzNotification/>
                              <CruzPopup/>
                              <h4 class="component-name mt-2" id="animated-text-5"><span class="animated-emphasization">Pop-Up</span></h4>
                            </div>
                            
                          </div>
                          <div class="text-foot-wrap flex flex-col">
                            <h4 class="font-pp-bold text-[3.5rem] gap-0 leading-none m-2 p-0 text-text-400" id="animated-text-2"><span class="animated-emphasization-2">Robert Leoni</span> <span class="animated-emphasization-1">&</span></h4>
                            <h2 class="font-humane-bold leading-none gap-0 uppercase m-2 p-0 text-[14rem] text-center" id="animated-text-2">components</h2>
                            <h4 class="font-pp-bold text-[3.5rem] gap-0 leading-none m-2 p-0 text-text-400 text-right" id="animated-text-2"><span class="animated-emphasization-2">&</span> <span class="animated-emphasization-1">Raven Drake</span></h4>
                          </div>
                        </div>
                        </div>
                        
                        <!-- *** TEXT ON THE right -->
                        <div class="text-right m-0 p-0 w-1/12 absolute top-[20%] left-[85%]" id="animated-text-7">
                          <h2 class="writing-mode-vertical text-[10rem] font-pp-bold uppercase">
                            <span class="animated-emphasization-2">cruz</span>
                          </h2>
                        </div>
                  </div>

                    <!-- ! TOP TEXT -->
                  <div class="marquee">
                    <div>
                      <span id="marquee-text"><span class="animated-emphasization-6">Semifrania</span>, Joshua Jehiel</span>
                      <span id="marquee-text"> ×</span>
                      <span id="marquee-text"><span class="animated-emphasization-6">Fortin</span>, Raven</span>
                      <span id="marquee-text"> ×</span>
                      <span id="marquee-text"><span class="animated-emphasization-6">Semifrania</span>, Joshua Jehiel</span>
                      <span id="marquee-text"> ×</span>
                      <span id="marquee-text"><span class="animated-emphasization-6">Fortin</span>, Raven</span>
                      <span id="marquee-text"> ×</span>
                    </div>
                  </div>


                    <!-- *** FORTIN & SEMIFRANIA COMPONENTS *** -->
                    <!-- ? MIDDLE -->
                    <div class="main-content-wrap m-0 p-0">
                      <div class="uniform-container">
                        <div class="flex gap-2">
                          <div class="semifrania-wrap">
                            <h4 class="component-name mb-4">Feedback, Menu & Bottom Sheets</h4>
                            <h4 class="subheading font-pp-thin text-primary-100 text-center text-[2.5rem] italic">by Semifrania, Joshua Jehiel</h4>                        
                            <div class="flex component-container border-[0.33rem] p-4">
                              <div class="bg-background-600 p-8">
                                <SemifraniaComponent/>
                              </div>
                              <div class="bg-background-800 p-8 w-full">
                                <SemifraniaMenuComponent/>
                              </div>
                            </div>
                          </div>
                          
                          <div class="fortin-wrap">
                            <div class="component-name-container">
                              <h4 class="component-name mb-4">Number Input, Textarea & Tooltip</h4>
                              <h4 class="subheading font-pp-thin text-primary-100 text-center text-[2.5rem] italic">by Fortin, Raven </h4>
                            
                            </div>
                            
                            
                              <div class="flex gap-2 p-4 border-[0.33rem]">
                                <div class="p-8 bg-background-300">
                                  <Fortin_NumberInput/>
                                </div>
                                <div class="bg-background-500 p-8">
                                  <Fortin_Textarea/>
                                </div>
                              </div>
  
                            <div class="border-[0.33rem] mt-2">
                              <div class="flex justify-center items-center bg-background-400 m-4 p-8">
                                <Fortin_Tooltip/>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                </section>

                <section class="dlc-banner-2">
                  <h1 id="animated-text-8" class="absolute">We're <span class="animated-emphasization-4"> almost</span> there.</h1>
                  <h1 id="animated-text-9" class="absolute">Hang on tightly! <span class="animated-emphasization-5">17/25.</span></h1>
                </section>

              <section class="dlc-platform-content-3">
                <div class="border-[0.63rem] border-accent-300 mt-[20rem] ml-[5rem] mr-[5rem] rounded-2xl p-4">
                  <div class="flex flex-col">
                    <div class="flex">
                      <div class="w-1/2 bg-background-700">
                        <h4 class="font-pp-bold mt-8 text-[3rem] leading-[1.1] text-center text-text-100">Sidebar + Navigation Bar Component</h4>
                        <h4 class="subheading font-pp-thin text-primary-100 text-center text-[2.5rem] italic">by Perez, Joshua Ezekiel</h4>
                        <div class="flex">
                          <div class="w-1/2 sidebar-wrap bg-background-200 ml-4 rounded-2xl">
                            <SidebarComponent/>
                          </div>
                          <div class="w-1/2 navbar-wrap">
                            <NavbarComponent/>
                          </div>
                        </div>
                        <div class="clock-wrapper flex flex-col countdown justify-center items-center" ref="clockWrapper">
                          <p class="clock-text text-[25rem] text-text-300 font-pp-bold m-0 p-0 " id="animate-clock-1">18</p>
                          <p class="clock-text text-[25rem] text-text-300 font-pp-bold m-0 p-0 absolute" id="animate-clock-2">19</p>
                          <p class="clock-text text-[25rem] text-text-300 font-pp-bold m-0 p-0 absolute" id="animate-clock-3">20</p>
                          <p class="clock-text text-[25rem] text-text-300 font-pp-bold m-0 p-0 absolute" id="animate-clock-4">21</p>
                          <p class="clock-text text-[25rem] text-text-300 font-pp-bold m-0 p-0 absolute" id="animate-clock-5">22</p>
                          <p class="clock-text text-[25rem] text-text-300 font-pp-bold m-0 p-0 absolute" id="animate-clock-6">23</p>
                          <p class="divider text-[5.5rem] text-primary-800 font-pp-bold m-0 p-0 absolute">/</p>
                          <p class="components-displayed text-[2.5rem] text-text-50 font-pp-medium m-0 p-0 top-[] absolute" id="stays-at-50-perc-viewport-only-scrolls">components displayed.</p>
                        </div>
                      </div>
                      <div class="w-1/2 bg-background-800">
                        <h4 class=" font-pp-bold mt-8 text-[3rem] leading-[1.1] text-center text-text-100">Search + Post Component</h4>
                        <h4 class="subheading font-pp-thin text-primary-100 text-center text-[2.5rem] italic">by Godes, Paul Adrian</h4>
                        <SearchComponents/>
                      </div>
                    </div>
                    
                    <!-- Row that spans both columns -->
                    <div class="flex flex-row flex-wrap ">
                      <div class="flex flex-col w-1/2 bg-background-300 justify-center items-center">
                        <h4 class=" font-pp-bold mt-0 text-[3rem] leading-[1.1] text-center text-text-800">Bread Crumb + Tree Component</h4>
                        <h4 class="subheading font-pp-thin text-primary-900 text-center text-[2.5rem] italic">by Magnaye, Ace Crizzler</h4>
                        </div>
                        <div class="w-1/2 flex flex-col bg-background-400 justify-center items-center p-16 gap-2">
                        <div class="w-full rounded-lg bg-background-200 p-4">
                          <BreadCrumb :items="breadcrumbItems"/>
                        </div>
                        <div class="w-full rounded-lg bg-background-200 p-4">
                          <TreeComponent :treeData="treeData"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

                  <section class="dlc-banner-3">
                  <h1 id="animate-clock-1" class="absolute">Now</h1>
                  <h1 id="animate-clock-2" class="absolute">warping</h1>
                  <h1 id="animate-clock-3" class="absolute">towards </h1>
                  <h1 id="animate-clock-4" class="absolute"><span class="animated-emphasization-4">Final</span></h1>
                  <h1 id="animate-clock-5" class="absolute"><span class="animated-emphasization-4">Final Phase V...</span></h1>
                  <h1 id="animated-text-6" class="absolute"><span class="animated-emphasization-5">>>></span></h1>
                  </section>
                  
                  <section class="dlc-platform-content-4"> 
                    <div class="uniform-container">
                      <div class="flex-container flex-col">
                        
                        <div class="flex flex-row pak_row">
                          <div class="square bg-background-200 w-[30%] h-auto text-text-800 p-4">
                            <h4 class=" font-pp-bold mt-0 text-[5rem] leading-[1.1] text-right text-text-800 mb-2">Selection One + Dialog & List</h4>
                            <h4 class="subheading font-pp-thin text-primary-900 text-right text-[2.5rem] italic mb-2">by</h4>
                            <!-- <h4 class=" font-pp-bold mt-0 text-[5rem] leading-[1.1] text-right text-text-800">Bread Crumb + Tree Component</h4> -->
                            <h4 class="subheading font-pp-thin text-primary-900 text-right text-[2.5rem] italic mb-2">Tajarros, Ritchmond James</h4>
                            <h4 class="subheading font-pp-thin text-primary-900 text-right text-[2.5rem] italic mb-2">Tuazon, Leomar</h4>
                            
                            </div>
                            <div class="square bg-background-300 w-[70%] h-auto text-text-900 p-4 flex-grow">
                              <TuazonDialog/>
                              <SelectionOne/> 
                        </div>
                        </div>
                      
                      
                      </div>

                          <div class="flex flex-row pak_row"> 
                            <div class="square bg-background-800 w-[70%] h-auto text-text-100 p-4 flex-grow">
                              <CarouselComponent/>
                            </div>
                            
                            <div class="w-[30%] h-[55rem] text-text-100 bg-background-700 p-4 text-wrap">
                              <h4 class="font-pp-bold mt-0 text-[5rem] leading-[1.1] text-left text-text-100">Hovered-On Carousel</h4>
                              <h4 class="subheading font-pp-thin text-primary-100 text-left text-[2.5rem] italic">by</h4>
                              <h4 class="subheading font-pp-thin text-primary-100 text-left text-[2.5rem] italic">Dela Cruz, Jheizon Brhylle</h4>
                            </div>
                          </div>

                          <div class="flex flex-row pak_row"> 
                            <div class="w-[30%] h-auto text-text-800 p-8 bg-background-400">
                              <h4 class="font-pp-bold mt-0 text-[5rem] leading-[1.1] text-left text-text-800">Selection Two</h4>
                              <h4 class="subheading font-pp-thin text-primary-950 text-left text-[2.5rem] italic">by</h4>
                              <h4 class="subheading font-pp-thin text-primary-950 text-left text-[2.5rem] italic">Tajarros, Ritchmond James</h4>
                            </div>
                            <div class="square bg-background-600 w-[70%] h-auto text-text-900 p-4 flex-grow">
                              <SelectionTwo/>
                            </div>
                            
                          </div>
                  </div>
                  <div class="flex flex-col justify-center items-center text-[25rem] font-humane-bold" id="animated-text-5">
         

                      <h1>The <span class="animated-emphasization-2" id="animated-text-9">End.</span></h1>
                      <h4 class="subheading font-pp-bold text-primary-200 text-left text-[10rem] absolute top-[230rem]" id="animated-text-4">27/27</h4>

                
                  </div>
                </section>

            </div>

            <!-- ! SCROLL DOWN SIGN -->
            <div class="scroll-down-container">
              <h5 class="scroll-down-text">scroll down to start.</h5>
              <img src="../assets/public/scroll-down.gif" alt="scroll-down-to-scroll" class="scroll-down">
            </div>
        </section>
    </main>
</template>

<script>
import DarkToggleMode from './DarkToggleMode.vue';
import TabsComponent from './TabsComponent.vue';
import CardsComponent from './CardsComponent.vue';
import CruzNotification from './CruzNotification.vue';
import CruzPopup from './CruzPopup.vue';
import Fortin_NumberInput from './Fortin_NumberInput.vue';
import Fortin_Textarea from './Fortin_Textarea.vue';
import Fortin_Tooltip from './Fortin_Tooltip.vue';
import MirabelAccordion from './MirabelAccordion.vue';
import MirabelProgressBar from './MirabelProgressBar.vue';
import MirabelPagination from './MirabelPagination.vue';
import SearchBarComponent from './SearchBarComponent.vue';
import SemifraniaComponent from './SemifraniaComponent.vue';
import SemifraniaMenuComponent from './SemifraniaMenuComponent.vue';
import SearchComponents from './SearchComponents.vue';
import BreadCrumb from './BreadCrumb.vue';
import TreeComponent from './TreeComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import NavbarComponent from './NavbarComponent.vue';
import SelectionOne from './SelectionOne.vue';
import SelectionTwo from './SelectionTwoComponent.vue';
import CarouselComponent from './CarouselComponent.vue';
import TuazonDialog from './TuazonDialog.vue';

export default {
  components: {
    DarkToggleMode,
    CarouselComponent,
    TabsComponent,
    CardsComponent,
    SearchBarComponent,
    CruzNotification,
    CruzPopup,
    Fortin_NumberInput,
    Fortin_Textarea,
    Fortin_Tooltip,
    MirabelAccordion,
    MirabelPagination,
    MirabelProgressBar,
    SemifraniaComponent,
    SemifraniaMenuComponent,
    SearchComponents,
    SidebarComponent,
    NavbarComponent,
    BreadCrumb,
    TreeComponent,
    SelectionOne,
    SelectionTwo,
    TuazonDialog
  },

  data() {
    return {
      breadcrumbItems: [
        { label: 'Desktop', link: '/home', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
        { label: 'Documents', link: '/documents', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
        { label: 'Add Document', icon: 'M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', isSpan: true }
      ],
      treeData: [
        {
          id: 1,
          name: 'ChuuPurple',
          children: []
        },
        {
          id: 2,
          name: 'Desktop',
          children: [
            {
              id: 3,
              name: 'Documents',
              children: [
                {
                  id: 5,
                  name: 'Add Document',
                  children: []
                }
              ]
            },
            {
              id: 4,
              name: 'Desktop',
              children: []
            }
          ]
        },
        {
          id: 6,
          name: 'Local Drive (C:)',
          children: []
        },
        {
          id: 7,
          name: 'Network Drive (S:)',
          children: []
        }
      ]
    };
  },

  mounted() {

    

    // Animation for the first section of the showcase
  const splitHeader = document.querySelectorAll('.animated-header-1');
  splitHeader.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: '50% 25%',
          end: '100% 25%',
          scrub: true,
          markers: false,
        },
        opacity: 0.05,
        y: 95,
        stagger: 0.1,
      });
    });

// Animation for the second section of the showcase
const splitTypeOne = document.querySelectorAll('.animated-text-1');
splitTypeOne.forEach((char) => {
  const splitText = new this.$SplitType(char, { types: 'chars' });
  this.$gsap.from(splitText.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 200%', // Adjusted start position
      end: 'top 95%',   // Adjusted end position
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

// * FIRST PRESENTER - GAB
const splitTypeTwo = document.querySelectorAll('#animated-text-2');
splitTypeTwo.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
    this.$gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 95%', // Adjusted start position
        end: 'top 75%',   // Adjusted end position
        scrub: true,
        markers: false,
      },
        opacity: 0,
        stagger: 1,
        y: 1920,
        ease: 'power3.out',
    });
  });

  const splitTypeThree = document.querySelectorAll('#animated-text-3');
  splitTypeThree.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 120%', // Adjusted start position
          end: 'top 75%',   // Adjusted end position
          scrub: false,
          markers: false,
        },
          opacity: 0,
          stagger: 0.1,
          z: 100,
          ease: 'power3.in',
          toggleActions: 'play play reverse reverse',
      });
  });

const splitTypeFour = document.querySelectorAll('#animated-text-4');
  splitTypeFour.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 90%', // Adjusted start position
          end: 'top 75%',   // Adjusted end position
          scrub: true,
          markers: false,
        },
        opacity: 0,
        x: -25,
        ease: 'power3.in',
        stagger: 0.7,
        // toggleActions: 'play play reverse reverse',
      });
  });

  const emphasisAnimation = document.querySelectorAll('.animated-emphasization');
  emphasisAnimation.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--text-400');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 1,
        stagger: 0.05,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 100%',
            end: 'top 95%',
            scrub: false,
            markers: false,
            toggleActions: 'play play reverse reverse',
        }        
  });
  });

  const emphasisAnimationScrub = document.querySelectorAll('.animated-emphasization-1');
  emphasisAnimationScrub.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-800');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 2,
        stagger: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 50%',
            end: 'top 15%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });

  const emphasisAnimationScrubTen = document.querySelectorAll('.animated-emphasization-10');
  emphasisAnimationScrubTen.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-800');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 2,
        stagger: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 150%',
            end: 'top 95%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });

  const emphasisAnimationScrubTwo = document.querySelectorAll('.animated-emphasization-2');
  emphasisAnimationScrubTwo.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--text-300');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 5,
        stagger: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 55%',
            end: 'top 45%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });

  const emphasisAnimationScrubThree = document.querySelectorAll('.animated-emphasization-3');
  emphasisAnimationScrubThree.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-800');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 5,
        stagger: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 55%',
            end: 'top 45%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });

  const emphasisAnimationScrubFour = document.querySelectorAll('.animated-emphasization-4');
  emphasisAnimationScrubFour.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-800');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 2,
        stagger: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 75%',
            end: 'top 65%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });
  
  const emphasisAnimationScrubFive = document.querySelectorAll('.animated-emphasization-5');
  emphasisAnimationScrubFive.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-800');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 2,
        stagger: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 40%',
            end: 'top 30%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });
  const emphasisAnimationScrubSix = document.querySelectorAll('.animated-emphasization-6');
  emphasisAnimationScrubSix.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-200');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--text-100');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 2,
        stagger: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: char,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
            markers: false,
            // toggleActions: 'play play reverse reverse',
        }        
  });
  });

  const splitTypeFive = document.querySelectorAll('#animated-text-5');
  splitTypeFive.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 110%', // Adjusted start position
          end: 'top 85%',   // Adjusted end position
          scrub: true,
          markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
          stagger: 0.1,
      });
  });

  const splitTypeSix = document.querySelectorAll('#animated-text-6');
  splitTypeSix.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 85%',
          end: 'top 35%',   
          scrub: true,
          markers: false,
        },
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.1,
      });
      // Exit Animation
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'bottom 50%', 
          end: 'bottom 25%',  
          scrub: true,
          markers: false,
        },
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
        stagger: 0.1,
      });
  });

  const splitTypeSeven = document.querySelectorAll('#animated-text-7');
  splitTypeSeven.forEach((word) => {
    const splitText = new this.$SplitType(word, { types: 'words' });
      this.$gsap.from(splitText.words, {
        scrollTrigger: {
          trigger: word,
          start: 'top 90%', // Adjusted start position
          end: 'top 50%',   // Adjusted end position
          scrub: true,
          markers: false,
        },
        opacity: 0,
        x: 50,
        ease: 'power3.inOut',
      });
  });

  
  const splitTypeEight = document.querySelectorAll('#animated-text-8');
  splitTypeEight.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'words, chars' });
      this.$gsap.from(splitText.words, {
        scrollTrigger: {
          trigger: char,
          start: 'top 105%', // Adjusted start position
          end: 'top 75%',   // Adjusted end position
          scrub: true,
          markers: false,
        },
        opacity: 0,
        x: -50,
        ease: 'power3.inOut',
      });

    this.$gsap.to(splitText.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 65%', // Adjusted start position
        end: 'top 50%',   // Adjusted end position
        scrub: true,
        markers: false,
      },
      opacity: 0,
      y: 50,
      ease: 'power3.inOut',

    });

  });
  
  const splitTypeNine = document.querySelectorAll('#animated-text-9');
  splitTypeNine.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'words, chars' });
      this.$gsap.from(splitText.words, {
        scrollTrigger: {
          trigger: char,
          start: 'top 75%', // Adjusted start position
          end: 'top 25%',   // Adjusted end position
          scrub: true,
          markers: false,
        },
        opacity: 0,
        y: -50,
        ease: 'power3.inOut',
      });

  });

  const firstClock = document.querySelectorAll('#animate-clock-1');
  firstClock.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          // pin: true,
          trigger: char,
          start: 'top 80%',
          end: 'top 75%',   
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.05,
      });
      // Exit Animation
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 70%', 
          end: 'top 65%',  
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'top',
        stagger: 0.05,
      });
  });
  const secondClock = document.querySelectorAll('#animate-clock-2');
  secondClock.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          // pin: true,
          trigger: char,
          start: 'top 65%',
          end: 'top 60%',   
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.05,
      });
      // Exit Animation
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 55%', 
          end: 'top 50%',  
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'top',
        stagger: 0.05,
      });
  });
  const thirdClock = document.querySelectorAll('#animate-clock-3');
  thirdClock.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          // pin: true,
          trigger: char,
          start: 'top 50%',
          end: 'top 45%',   
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.05,
      });
      // Exit Animation
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 40%', 
          end: 'top 35%',  
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'top',
        stagger: 0.05,
      });
  });
  const fourthClock = document.querySelectorAll('#animate-clock-4');
  fourthClock.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          // pin: true,
          trigger: char,
          start: 'top 35%',
          end: 'top 30%',   
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.05,
      });
      // Exit Animation
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 25%', 
          end: 'top 20%',  
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'top',
        stagger: 0.05,
      });
  });
  const fifthClock = document.querySelectorAll('#animate-clock-5');
  fifthClock.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          // pin: true,
          trigger: char,
          start: 'top 20%',
          end: 'top 15%',   
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.05,
      });
      // Exit Animation
      this.$gsap.to(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 10%', 
          end: 'top 5%',  
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'top',
        stagger: 0.05,
      });
  });
  const sixthClock = document.querySelectorAll('#animate-clock-6');
  sixthClock.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          // pin: true,
          trigger: char,
          start: 'top 5%',
          end: 'top 0%',   
          scrub: true,
          markers: false,
        },
        opacity: 0,
        scaleY: 0,
        y: 20,
        transformOrigin: 'bottom',
          stagger: 0.05,
      });
  });
// Add a delay before animating the next container
this.$gsap.from(".component-left", {
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: ".component-left",
        start: "top 150%", // Adjust according to your needs
        end: "bottom 100%", // Adjust according to your needs
        scrub: true,
        markers: false,
    },
});

// Add a delay before animating the next container
this.$gsap.from(".component-right", {
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: ".component-left",
        start: `top 150%`, // Adjust according to your needs
        end: `bottom 90%`, // Adjust according to your needs
        scrub: true,
        markers: false,
    },
});

// Add a delay before animating the next container
this.$gsap.from(".component-card-container", {
    opacity: 0,
    x: 50,
    scrollTrigger: {
        trigger: ".component-left",
        start: `top 150%`, // Adjust according to your needs
        end: `bottom 80%`, // Adjust according to your needs
        scrub: false,
      markers: false,
      toggleActions: 'play play reverse reverse',
    },
});

// GSAP animation for sticky section
this.$gsap.to('.dlc-sticky', {
  scrollTrigger: {
    trigger: '.dlc-sticky',
    start: 'top top',
    end: () => '+=' + (window.innerHeight + this.$refs.websiteContent.offsetHeight * 0.5),
    scrub: 1,
    pin: true,
  },
  y: 250,
  scale: 0.50,
  rotation: -15,
  ease: 'power3.out',
});

// GSAP animation for website content
this.$gsap.fromTo(
  '.dlc-platform-content',
  {
    x: -100,
    scale: 0.3,
    rotation: 15,
  },
  {
    scrollTrigger: {
      trigger: '.dlc-platform-content',
      start: 'top 250%', // Adjusted start position
      end: 'top 40%',   // Adjusted end position
      scrub: true,
    },
    x: 0,
    scale: 1,
    rotation: 0,
    ease: 'power3.out',
    duration: 2,        // Increased duration
  }
);

// Mousemove event handling
const wrapper = this.$refs.tracker;
const emoji = this.$refs.emoji;
const emojiFace = this.$refs.emojiFace;

const moveEvent = (e) => {
  const wrapperRect = wrapper.getBoundingClientRect();
  const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
  const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

  const emojiMaxDisplacement = 50;
  const emojiFaceMaxDisplacement = 75;

  const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
  const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;

  const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
  const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

  this.$gsap.to(emoji, {
    x: emojiDisplacementX,
    y: emojiDisplacementY,
    ease: 'power3.out',
    duration: 0.35,
  });

  this.$gsap.to(emojiFace, {
    x: emojiFaceDisplacementX,
    y: emojiFaceDisplacementY,
    ease: 'power3.out',
    duration: 0.35,
  });
};

const leaveEvent = () => {
  this.$gsap.to([emoji, emojiFace], {
    x: 0,
    y: 0,
    ease: 'power3.out',
    duration: 1,
  });
};

wrapper.addEventListener('mousemove', moveEvent);
wrapper.addEventListener('mouseleave', leaveEvent);

// Initialize Lenis for smooth scrolling
this.$lenis = new this.$Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

const raf = (time) => {
  this.$lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
  },
  beforeUnmount() {
    if (this.$lenis) {
      this.$lenis.destroy();
    }
  },
};
</script>

<style scoped>
  section.dlc-platform-content-4 {
      position: absolute;
      top: 1050vh;
      height: 500vh;
      width: 100%;
      left: 0;
      background: var(--background-900);
  }

  section.dlc-banner-3 {
    position: absolute;
    top: 1000vh;
    height: 420px;
    width: 100%;
    background: var(--background-200);
    z-index: 1;
    display: flex;
    align-items: center; 
    justify-content: center; 
    font-size: 10rem; 
    color: var(--secondary-800); 
    text-align: center;
    font-family: Humane Bold; 
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    line-height: 0.4;
  }
  section.dlc-banner-2 {
    position: absolute;
    top: 730vh;
    height: 420px;
    width: 100%;
    background: var(--background-200);
    z-index: 1;
    display: flex;
    align-items: center; 
    justify-content: center; 
    font-size: 10rem; 
    color: var(--secondary-800); 
    text-align: center;
    font-family: Humane Bold; 
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    line-height: 0.4;
  }

section.dlc-platform-content-3 {
    position: absolute;
    top: 750vh;
    height: 300vh;
    width: 100%;
    left: 0;
    background: var(--background-900);
}

  /* marquee div container */
.marquee {
    font-size: 10vw;
    color: var(--text-900);
    font-family: Humane SemiBold;
    height: 14.5vw;
    overflow: hidden;
    background-color: var(--background-600);
    position: relative;
}  /* marquee div container */

.marquee-reverse {
    font-size: 10vw;
    color: var(--text-900);
    font-family: Humane SemiBold;
    height: 14.5vw;
    overflow: hidden;
    background-color: var(--background-400);
    position: relative;
}

/* nested div inside the container */
.marquee div {
    display: flex; /* Use flexbox for a continuous scrolling effect */
    width: 200%; /* Ensure the div is wide enough to contain all repeated spans */
    position: absolute;
    animation: marquee 12s linear infinite;
}

/* nested div inside the container */
.marquee-reverse div {
    display: flex; /* Use flexbox for a continuous scrolling effect */
    width: 200%; /* Ensure the div is wide enough to contain all repeated spans */
    position: absolute;
    animation: marquee-reverse 12s linear infinite;
}

/* span with text */
.marquee span#marquee-text {
    flex: 1 0 auto; /* Flex items to ensure they take equal space */
    padding-right: 10vw; /* Adjust the spacing between texts */
}

/* keyframe */
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* keyframe reversed */
@keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
}



  .background-image-default {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .writing-mode-vertical {
    text-orientation: upright;
    writing-mode: vertical-rl;
    letter-spacing: -1rem;
  }

  .scroll-down-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  img.scroll-down {
    /* z-index: 1; */
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 88%;
    animation: blink 1.5s infinite;
  }

  .scroll-down-text {
    font-family: PP Neue Montreal Bold;
    /* z-index: 100; */
    position: absolute;
    font-size: 1rem;
    /* font-weight: bolder; */
    color: var(--primary-800);
    text-transform: uppercase;
    font-style: italic;
    top: 87%;
    animation: blink 2s infinite;
  }

  .blink {
    animation: blink 5s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .component-wrapper {
    margin-bottom: 2rem;
  }

  .no-line-spacing {
    line-height: 0;
    letter-spacing: -0.09em;
  }

  .dlc-overline {
    font-size: 2rem;
    font-family: PP Neue Montreal Book;
    font-kerning: 10rem;
    letter-spacing: 2.5rem;
  }

  
  .countdown-denominator,
  .countdown-numerator {
    font-family: PP Neue Montreal Medium;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  
  .countdown-numerator {
    font-size: 5.5rem;
    text-transform: uppercase;
    font-family: PP Neue Montreal Bold;
  }
  .countdown-denominator {
    font-family: PP Neue Montreal Bold;
    font-size: 7.5rem;
    kerning: 0;
    text-transform: uppercase;
  }

  .component-countdown-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
  }

  .component-card-container {
      padding: 1rem;
  }

  .component-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .component-left, .component-right, .component-card-container, .component-right-2 {
    border: solid 0.33rem var(--accent-500);
  }

  .component-left {
    margin-right: 1rem;
    padding: 2rem;
  }

  .component-right {
    flex: 1;
    margin-left: 1rem;
    display: flex;
    justify-content: flex-end;
    padding: 1.33rem;
  }

  .component-right-2 {
    margin-left: 1rem;
    padding: 1.33rem;
    height: auto;
    width: auto;
  }

  .search-bar-wrapper {
    width: 100%;
    max-width: 400px; /* Adjust as needed */
    position: relative;
  }

  .component-name {
      font-family: "PP Neue Montreal Bold";
      font-size: 3rem;
      line-height: 1.1;
      color: var(--text-400);
      text-align: center;
  }

  .presenter-header {
      font-family: "Humane Bold", sans-serif;
      font-size: 10rem;
      line-height: 1.1;
      color: var(--text-400);
      text-align: center;
  }

  /* SEGREGATED COMPONENT CSS CONTAINERS */
  .uniform-container {
      margin: 5rem;
      border: solid 0.63rem var(--accent-300);
      border-radius: 2rem;
      padding: 2rem;
  }

  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  .dlc-container {
      width: 100%;
      height: 100%;
      display: flex;
  }

  section.dlc-sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--background-200);
  }

  nav {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
  }

  .dlc-logo a {
      text-decoration: none;
      text-transform: uppercase;
      font-family: "Humane Bold", sans-serif;
      font-size: 60px;
      color: var(--primary-900);
  }

  .dlc-sub-logo {
      color: var(--text-600);
      margin: 92px 0 0 34px;
  }

  .dlc-links {
      display: flex;
      align-items: center;
      gap: 1em;
  }

  .dlc-links a {
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.5em 1em;
      font-size: 13px;
      color: var(--text-700);
      border: 1px solid var(--accent-900);
      border-radius: 20px;
  }

  .dlc-links a:hover {
      color: var(--text-50);
      background: var(--secondary-800);
  }

  .dlc-header {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  /* MAKE THE TEXT RESPONSIVE BY USING MEDIA QUERY? */
  .dlc-header h1 {
      text-transform: uppercase;
      font-family: Humane SemiBold;
      font-size: 42vw;
      font-weight: 400;
      color: var(--text-700);
      line-height: 100%;
  }

  .dlc-badge-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(95%, 20%);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      z-index: 0;

  }

  .dlc-badge-container img {
      width: 240px;
      height: auto;
      animation: rotateBadge 15s infinite linear;
  }

  .dlc-badge-name {
      position: absolute;
      color: var(--primary-950);
      font-family: "Humane SemiBold", sans-serif;
      font-size: 5em;
      text-transform: uppercase;
      z-index: 1;
      margin: 0.8em;
  }

  section.dlc-platform-content {
      position: absolute;
      top: 100vh;
      width: 100%;
      background: var(--background-900);
      padding: 6em;
  }

  section.dlc-banner-1 {
    position: absolute;
    top: 350vh;
    height: 420px;
    width: 100%;
    background: var(--background-200);
    z-index: 1;
    display: flex;
    align-items: center; 
    justify-content: center; 
    font-size: 10rem; 
    color: var(--secondary-800); 
    text-align: center; 
    font-family: Humane Bold; 
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    line-height: 0.4;
  }

  section.dlc-platform-content-2 {
    position: absolute;
    top: 400vh;
    width: 100%;
    background: var(--background-900);
  }

  .dlc-tracker {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      padding: 2em 0;
      z-index: 0;
  }

  .dlc-emoji {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      background: url('../assets/public/emoji-light.png') no-repeat 50% 50%;
      background-size: cover;
      border-radius: 100%;
  }

  [data-theme="dark"] .dlc-emoji {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      background: url('../assets/public/emoji-dark.png') no-repeat 50% 50%;
      background-size: cover;
      border-radius: 100%;
  }

  .dlc-emoji-face {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 225px;
      height: 200px;
      display: flex;
      flex-direction: column;

  }

  .dlc-eyes, .dlc-mouth-wrapper {
      flex: 1;
  }

  .dlc-eyes {
      display: flex;
      justify-content: space-around;
  }

  .dlc-eyes svg {
      width: 75px;
      height: 75px;
      animation: rotateEyes 4s infinite linear;
  }

  .dlc-eyes svg path {
      fill: var(--secondary-900);
  }

  .dlc-mouth-wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
  }

  .dlc-mouth {
      width: 40px;
      height: 40px;
      margin-top: 10rem;
      border-radius: 50px;
      background: var(--secondary-900);
      animation: wonderFace 2s infinite cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .dlc-section-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2em;
  }

  .dlc-section-header h1 {
      font-family: "Humane SemiBold";
      font-size: 10vw;
      font-weight: 400;
      color: var(--primary-400);
      line-height: 100%;
      text-transform: uppercase;
  }

  .dlc-section-header p {
      color: var(--text-400);
      font-size: 13px;
      text-transform: uppercase;
      text-align: right;
      width: 25%;
  }

  .dlc-row {
      display: flex;
      gap: 2em;
      margin: 2em 0;

  }

  .dlc-row img {
      height: 600px;
  }



  /* ANIMATIONS */

  @keyframes rotateEyes {
      0% {
          transform: rotate(0deg);
      }

      100% {
          transform: rotate(360deg);
      }
  }

  @keyframes wonderFace {
      0% {height: 40px;}
      50% {height: 80px;}
      100% {height: 40px;}
  }

  @keyframes rotateBadge {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }

</style>