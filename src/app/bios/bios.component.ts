import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'retirement-bios',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './bios.component.html',
  styleUrl: './bios.component.scss',
})
export class BiosComponent {
  personData = [
    {
      officialImage: "assets/images/CVOP.png",
      images: ["assets/images/abm-senior.png"],
      name: "Colonel Kenneth J. Voigt, Jr.",
      bio: [
        "Colonel Kenneth J. Voigt, Jr., is the Commander, 552nd Air Control Wing, Tinker Air Force Base, Oklahoma. He is responsible for Air Combat Command's fleet of E-3 Airborne Warning & Control System aircraft and ground-based Control & Reporting Centers supporting combatant commanders worldwide. He leads over 4,360 men and women at four Air Force bases and manages resources that includes the E-3 AWACS aircraft and CRCs valued at $16.1 billion.",
        "Col Voigt also oversees Air Combat Command’s largest Programmed Flying Training Unit and its non-aircraft specific functional training. He entered the Air Force in 1999 through the Reserve Officer Training Corps at Norwich University, Vermont. He is a Senior Air Battle Manager with operational combat experience in CRCs, AWACS, and Air Operations Centers. He has served on the staffs of Headquarters United States Air Force and United States Indo-Pacific Command. Finally, Col Voigt commanded the 505th Test Squadron, Nellis AFB, Nevada, and the 552nd Air Control Group, Tinker AFB, Oklahoma.",
        "Colonel Voigt has participated in Operations INHERENT RESOLVE, SPARTAN SHIELD, FREEDOM SENTINEL, ENDURING FREEDOM, IRAQI FREEDOM, SOUTHERN WATCH, the Resolute Support mission, and counter drug operation."],
      operations: [
        "INHERENT RESOLVE",
        "SPARTAN SHIELD",
        "FREEDOM SENTINEL",
        "ENDURING FREEDOM",
        "IRAQI FREEDOM",
        "SOUTHERN WATCH"
      ],
      education: [
        "1999 Bachelor of Science, Electrical Engineering, Norwich University, Northfield, Vermont",
        "2004 Master of Human Relations, University of Oklahoma, Norman, Oklahoma",
        "2005 Squadron Officer School, Maxwell AFB, Alabama",
        "2007 USAF Weapons School, Nellis AFB, Nev.",
        "2011 Master of Arts in National Security & Strategic Studies, U.S. Naval War College",
        "2017 Master of Science in Joint Campaign Planning, Joint Advanced Warfighting School"
      ],
      awards: [
        "Legion of Merit",
        "Defense Meritorious Service Medal with oak leaf cluster",
        "Meritorious Service Medal with two oak leaf clusters",
        "Air Medal with two oak leaf clusters",
        "Aerial Achievement Medal",
        "Air Force Commendation Medal with two oak leaf clusters",
        "Afghanistan Campaign Medal with two bronze stars",
        "Iraq Campaign Medal with bronze star "
      ],
      promotionDates: [
        { rank: "2Lt", date: "07 Jun 1999" },
        { rank: "1Lt", date: "07 Jun 2001" },
        { rank: "Capt", date: "07 Jun 2003" },
        { rank: "Maj", date: "01 Mar 2009" },
        { rank: "Lt Col", date: "01 Dec 2013" },
        { rank: "Col", date: "01 Jan 2020" }

      ],
      flightData: [
        "Rating: Senior Air Battle Manager",
        "Flight hours: 2,240 - 459 Combat/104 Combat Support",
        "Aircraft Flown: E-3B/C"
      ]
    },
    {
      officialImage: "assets/images/CTMPhoto.png",
      images: ["assets/images/c2.png", "assets/images/wdir.png"],
      name: "CMSgt Tracy L. Massey",
      bio: [
        "Chief Master Sergeant Tracy Massey is the 552d Air Control Group Superintendent, Tinker AFB, Oklahoma. She is the Senior Enlisted Advisor, to the Commander for over 900 Airmen, comprised of diverse Air Force Specialty Codes at four local and Geographically Separated Units. She provides operations, maintenance, logistics and training support to two combat-coded Air Control Squadrons, one Air Control Networks Squadron and one Operations Support Squadron, effectively ensuring Command and Control Battle Management Operations to Combatant Commanders worldwide.",
        "Chief Massey entered the Air Force in May 1994. After gaining technical knowledge at the Alaska NORAD Region Air Operations Center, Chief Massey was selected to attend Weapons Director training. Upon graduation, she deployed in support of Operation SOUTHERN WATCH. As a member of her unit’s convoy from Kuwait to Baghdad International Airport, she aided in the set-up of the first mobile ground radar unit in Iraq. Later, she managed, tracked and sourced approximately 1,000 deployments for Tactical Control Systems, Air Battle Managers, Tactical Control Party and Space taskings. As Operations Superintendent, she led 32 Airmen, working with Canadian Forces, to accomplish their NORAD mission. In her last assignment, she was the Headquarters Air Force Command and Control Battle Management Operations Career Field Manager."],
      assignments: [
        {
          "time": "July 2021 - Present",
          "description": "Superintendent, 552 Air Control Group, Tinker AFB, OK."
        },
        {
          "time": "August 2018 - July 2021",
          "description": "Headquarters Air Force C2 Battle Management Operations CFM, Pentagon, D.C."
        },
        {
          "time": "August 2017 - August 2018",
          "description": "HQ AETC C2 Battle Management Operations, Functional Area Manager, Joint Base San Antonio Randolph, TX"
        },
        {
          "time": "October 2013 - August 2017",
          "description": "Superintendent, Detachment 2, First Air Force, CFB North Bay, Ontario, Canada"
        },
        {
          "time": "December 2009 - July 2013",
          "description": "Superintendent, AEF Operations Scheduling Section, HQ Air Force Personnel Center, Randolph Air Force Base, TX"
        },
        {
          "time": "July 2006 - December 2009",
          "description": "Noncommissioned Officer in Charge, Operations Flights, 607 Air Control Squadron, Luke Air Force Base, AZ"
        },
        {
          "time": "May 2002 - July 2006",
          "description": "Noncommissioned Officer in Charge, Weapons and Tactics, 728 Air Control Squadron, Eglin Air Force Base, FL"
        },
        {
          "time": "May 2001 - May 2002",
          "description": "Security Manager, 621 Air Control Squadron, Osan Air Base, Republic of South Korea"
        },
        {
          "time": "January 1998 - May 2001",
          "description": "Operations Training Specialist, 74 Air Control Squadron, Langley Air Force Base, VA"
        },
        {
          "time": "August 1994 - December 1997",
          "description": "Noncommissioned Officer in Charge, Simulation/Exercise Training, 611 Air Control Squadron, Elmendorf Air Force Base, AK"
        }
      ],
      awards: ["Legion of Merit", "Meritorious Service Medal", "Air Force Commendation Medal", "Air Force Achievement Medal"],
      achievements: [
        { year: 2008, description: "Distinguished Graduate, Airmen Leadership School" },
        { year: 2008, description: "Leadership Award, Airmen Leadership School" },
        { year: 2015, description: "Chief of Staff Team Excellence Award, HAF" },
        { year: 2019, description: "Flight Chief of the Year, 82d TRW" },
        { year: 2021, description: "Distinguished Graduate, SNCO Academy" }
      ],
      promotionDates: [
        { rank: "SSgt", date: "01 Jun 2000" },
        { rank: "TSgt", date: "01 Jun 2004" },
        { rank: "MSgt", date: "01 Jun 2008" },
        { rank: "SMSgt", date: "01 Jul 2013" },
        { rank: "CMSgt", date: "01 May 2017" }
      ]
    }
  ]
}
