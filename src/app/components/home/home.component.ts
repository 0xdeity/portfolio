import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

interface SubBubble {
  label: string;
  positionClass: string; // Class to determine position
}

interface Bubble {
  label: string;
  subBubbles: SubBubble[];
  showSubBubbles: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('secondContainer', { static: true }) secondContainer!: ElementRef;
  @ViewChild('imageListContainer', { static: true }) imageListContainer!: ElementRef;
  @ViewChild('thirdContainer', { static: true }) thirdContainer!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('firstContainer', { static: true }) firstContainer!: ElementRef;
  @ViewChild('modalBubbleContainer', { static: true }) modalBubbleContainer!: ElementRef;



  // Intersection Observer
  public isInView: boolean = false;

  // Image List
  public imageListVisible: boolean = false;

  // Timeline
  public timelineVisible: boolean = false;

  // bubbles
  public bubbles: Bubble[] = [
    { label: 'Full Stack', subBubbles: [], showSubBubbles: true },
    { label: 'AI', subBubbles: [], showSubBubbles: true },
    { label: 'Web3', subBubbles: [], showSubBubbles: true }
  ];

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
    { src: '../../../assets/nodejs.png', alt: 'Image 5' },
    { src: '../../../assets/nodejs.png', alt: 'Image 6' },
    { src: '../../../assets/nodejs.png', alt: 'Image 7' },
    { src: '../../../assets/nodejs.png', alt: 'Image 8' },
    { src: '../../../assets/nodejs.png', alt: 'Image 9' },
    { src: '../../../assets/nodejs.png', alt: 'Image 10' },
    { src: '../../../assets/nodejs.png', alt: 'Image 11' },
    { src: '../../../assets/nodejs.png', alt: 'Image 12' },
    { src: '../../../assets/nodejs.png', alt: 'Image 13' },
    { src: '../../../assets/nodejs.png', alt: 'Image 14' },
  ];

  // Image List - Second Column
  public imageList2: any[] = [
    { src: '../../../assets/ethereum.png', alt: 'Image 1' },
    { src: '../../../assets/ethereum.png', alt: 'Image 2' },
    { src: '../../../assets/ethereum.png', alt: 'Image 3' },
    { src: '../../../assets/ethereum.png', alt: 'Image 4' },
    { src: '../../../assets/ethereum.png', alt: 'Image 5' },
    { src: '../../../assets/ethereum.png', alt: 'Image 6' },
    { src: '../../../assets/ethereum.png', alt: 'Image 7' },
    { src: '../../../assets/ethereum.png', alt: 'Image 8' },
    { src: '../../../assets/ethereum.png', alt: 'Image 9' },
    { src: '../../../assets/ethereum.png', alt: 'Image 10' },
    { src: '../../../assets/ethereum.png', alt: 'Image 11' },
    { src: '../../../assets/ethereum.png', alt: 'Image 12' },
    { src: '../../../assets/ethereum.png', alt: 'Image 13' },
    { src: '../../../assets/ethereum.png', alt: 'Image 14' },
    { src: '../../../assets/ethereum.png', alt: 'Image 15' },
  ];

  // Fourth Container Cards
  public fourthContainerCards: any[] = [
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 1", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 2", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 3", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 4", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 5", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 6", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 7", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 8", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 9", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" },
    { src: "../../../assets/pexels-nietjuh-796602.jpg", alt: "Image 10", title: "lunartoken.co", icon: "fa-brands fa-rust", icon2: "fa-solid fa-bitcoin-sign", icon3: "fa-brands fa-hive", purpose: "Web3, NFT, tokonomics" }
  ];

  // Card Position
  cardPosition = { x: 0, y: 0 };

  // Number of columns to initially show
  initialColumnsToShow: number = 3;

  // Flag to track if all columns are expanded
  allColumnsExpanded: boolean = false;

  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;
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

    // Initialize sub-bubbles
    this.initializeBubbles();
  }



  // Method to get the number of columns to display
  getColumnsToShow() {
    return this.allColumnsExpanded ? this.fourthContainerCards.length : this.initialColumnsToShow;
  }


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

  // bubbles
  initializeBubbles() {
    this.bubbles.forEach(bubble => {
      if (bubble.label === 'Full Stack') {
        bubble.subBubbles = [
          { label: 'Backend', positionClass: 'sub-bubble-left' },
          { label: 'Frontend', positionClass: 'sub-bubble-right' },
          { label: 'UI/UX', positionClass: 'sub-bubble-top' },
          { label: 'Databases', positionClass: 'sub-bubble-bottom' }
        ];
      } else if (bubble.label === 'AI') {
        bubble.subBubbles = [
          { label: 'Machine Learning', positionClass: 'sub-bubble-left' },
          { label: 'Deep Learning', positionClass: 'sub-bubble-right' },
          { label: 'NLP', positionClass: 'sub-bubble-top' },
          { label: 'Computer Vision', positionClass: 'sub-bubble-bottom' }
        ];
      } else if (bubble.label === 'Web3') {
        bubble.subBubbles = [
          { label: 'Smart Contracts', positionClass: 'sub-bubble-left' },
          { label: 'DeFi', positionClass: 'sub-bubble-right' },
          { label: 'NFTs', positionClass: 'sub-bubble-top' },
          { label: 'DAOs', positionClass: 'sub-bubble-bottom' }
        ];
      }
    });
  }

  toggleSubBubbles(bubble: Bubble) {
    bubble.showSubBubbles = !bubble.showSubBubbles;
  }
}
