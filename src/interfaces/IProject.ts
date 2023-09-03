export interface IProject {
  name: string;
  description: string;
  about: string;
  isPublic: boolean;
}

export const rawProjectItems: IProject[] = [
  {
    name: "Smart Thermostat Control",
    description:
      "Develop a smart thermostat control system that allows users to remotely monitor and control their home heating and cooling systems for energy efficiency.",
    about:
      "This project aims to create an energy-efficient solution for climate control in homes, providing users with real-time temperature data and the ability to adjust settings remotely.",
    isPublic: true,
  },
  {
    name: "Environmental Sensor Network",
    description:
      "Build a wireless sensor network to monitor environmental parameters like air quality, humidity, and temperature in urban areas.",
    about:
      "This project focuses on creating an interconnected network of sensors that can collect data for urban planning, environmental research, and public awareness.",
    isPublic: true,
  },
  {
    name: "IoT-Based Water Quality Monitoring",
    description:
      "Create an IoT-based system to monitor water quality in rivers and lakes, providing real-time data on parameters such as pH levels and pollutant concentrations.",
    about:
      "This project aims to address environmental concerns by enabling efficient monitoring of water quality in natural bodies of water, helping to safeguard ecosystems and public health.",
    isPublic: false,
  },
  {
    name: "Low-Power Wearable Health Monitor",
    description:
      "Develop a low-power wearable device for continuous health monitoring, measuring vital signs such as heart rate, ECG, and body temperature.",
    about:
      "This project focuses on creating a wearable health monitoring solution that enhances healthcare by providing individuals and healthcare professionals with valuable health data.",
    isPublic: true,
  },
  {
    name: "Automated Plant Irrigation System",
    description:
      "Build an automated plant irrigation system that uses soil moisture sensors to optimize watering schedules for plants in gardens or farms.",
    about:
      "This project aims to improve agriculture and reduce water wastage by implementing smart irrigation practices based on real-time soil moisture data.",
    isPublic: true,
  },
  {
    name: "RFID-Based Inventory Tracking",
    description:
      "Create an RFID-based inventory tracking system for businesses to efficiently manage and monitor their stock levels and supply chains.",
    about:
      "This project focuses on enhancing inventory management through RFID technology, enabling real-time tracking of products and reducing manual labor in tracking inventory.",
    isPublic: true,
  },
];
