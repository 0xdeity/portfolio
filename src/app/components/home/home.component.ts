import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // skillSet
  public skillSet: any[] = [
    { skill: "Frontend", experience: "+7 years" },
    { skill: "Frontend", experience: "+7 years" },
    { skill: "Frontend", experience: "+7 years" },
    { skill: "Frontend", experience: "+7 years" }
  ];

  // socialLinks
  public socialLinks: any[] = [
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
    { icon: "fa-brands fa-discord" },
  ];

  // coreSkills
  public coreSkills: any[] = [
    { icon: "fa-solid fa-code", title: "ui/ux Design", description: "Design a website or app with Figma" },
    { icon: "fa-solid fa-code", title: "ui/ux", description: "Design a website or app with Figma" },
    { icon: "fa-solid fa-code", title: "ui/ux", description: "Design a website or app with Figma" },
    { icon: "fa-solid fa-code", title: "ui/ux", description: "Coding web3 & solidity with Smart contract, Rust, NFT mint, Ethereum..." },
  ]


  // cardPosition
  cardPosition = { x: 0, y: 0 };

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = document.querySelector('.card') as HTMLElement;
    const container = document.querySelector('.first-container') as HTMLElement;

    if (card && container) {
      const rect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - cardRect.width / 2;
      const offsetY = event.clientY - rect.top - cardRect.height / 2;

      this.cardPosition = {
        x: offsetX / 30,  // Adjust the divisor to control the intensity
        y: offsetY / 30   // Adjust the divisor to control the intensity
      };
    }
  }
}
