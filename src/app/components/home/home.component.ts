import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getSeverity(arg0: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('secondContainer', { static: true }) secondContainer!: ElementRef;
  @ViewChild('imageListContainer', { static: true }) imageListContainer!: ElementRef;
  @ViewChild('thirdContainer', { static: true }) thirdContainer!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('firstContainer', { static: true }) firstContainer!: ElementRef;

  // Intersection Observer
  public isInView: boolean = false;

  // Image List
  public imageListVisible: boolean = false;
  
  // Timeline
  public timelineVisible: boolean = false;

  // Skill Set
  public skillSet: any[] = [
    { skill: "Frontend", experience: "+7 years" },
    { skill: "Frontend", experience: "+7 years" },
    { skill: "Frontend", experience: "+7 years" },
    { skill: "Frontend", experience: "+7 years" }
  ];

  // Social Links
  public socialLinks: any[] = [
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
  ];

  // Core Skills
  public coreSkills: any[] = [
    { icon: "fa-solid fa-code", title: "ui/ux Design", description: "Design a website or app with Figma" },
    { icon: "fa-solid fa-code", title: "ui/ux", description: "Design a website or app with Figma" },
    { icon: "fa-solid fa-code", title: "ui/ux", description: "Design a website or app with Figma" },
    { icon: "fa-solid fa-code", title: "ui/ux", description: "Coding web3 & solidity with Smart contract, Rust, NFT mint, Ethereum..." },
  ];

  // Second Column List
  public secondColList: any[] = [
    { description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, suscipit!" },
    { description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, suscipit!" },
    { description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, suscipit!" },
    { description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, suscipit!" },
    { description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, suscipit!" },
  ];

  // Image List - First Column
  public imageList: any[] = [
    { src: '../../../assets/nodejs.png', alt: 'Image 1' },
    { src: '../../../assets/nodejs.png', alt: 'Image 2' },
    { src: '../../../assets/nodejs.png', alt: 'Image 3' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
    { src: '../../../assets/nodejs.png', alt: 'Image 4' },
  ];

  // Image List - Second Column
  public imageList2: any[] = [
    { src: '../../../assets/ethereum.png', alt: 'Image 1' },
    { src: '../../../assets/ethereum.png', alt: 'Image 2' },
    { src: '../../../assets/ethereum.png', alt: 'Image 3' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
  ];

  // Fourth Container Cards
  public fourthContainerCards: any[] = [
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa- brands fa - hive", purpose: "Web3, NFT, tokonomics" },
  ];

  // Card Position
  cardPosition = { x: 0, y: 0 };

  // Number of columns to initially show
  initialColumnsToShow: number = 3;

  // Flag to track if all columns are expanded
  allColumnsExpanded: boolean = false;



  @ViewChild('container', { static: true }) carouselContainer!: ElementRef;
  products: any;
  responsiveOptions: any;

  ngOnInit(): void {
    // Observer for secondContainer
    const secondContainerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.isInView = entry.isIntersecting;
      });
    }, { threshold: 0.15 });

    secondContainerObserver.observe(this.secondContainer.nativeElement);

    // Observer for imageListContainer
    const imageListObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.imageListVisible = entry.isIntersecting;
      });
    });

    imageListObserver.observe(this.imageListContainer.nativeElement);

    // Observer for thirdContainer
    const thirdContainerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.timelineVisible = entry.isIntersecting;
      });
    }, { threshold: 0.15 });

    thirdContainerObserver.observe(this.thirdContainer.nativeElement);


  }

  //
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = document.querySelector('.card') as HTMLElement;
    const container = document.querySelector('.first-container') as HTMLElement;

    if (card && container) {
      const rect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      // Check if the mouse is within the bounds of the container
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        const offsetX = event.clientX - rect.left - cardRect.width / 2;
        const offsetY = event.clientY - rect.top - cardRect.height / 2;

        this.cardPosition = {
          x: offsetX / 30,
          y: offsetY / 30
        };
      }
    }
  }


  // Method to get the number of columns to display
  getColumnsToShow() {
    return this.allColumnsExpanded ? this.fourthContainerCards.length : this.initialColumnsToShow;
  }

}
