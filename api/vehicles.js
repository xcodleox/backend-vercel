export default function handler(req, res) {

   // Libera CORS para o Angular local
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Trata a requisição pré-flight (CORS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
    const vehicles = [
      {
        id: 1,
        vehicle: 'Ranger',
        volumetotal: 145760,
        connected: 70000,
        softwareUpdates: 27550,
        img: '/img/ranger.png',
      },
      {
        id: 2,
        vehicle: 'Mustang',
        volumetotal: 1500,
        connected: 500,
        softwareUpdates: 750,
        img: '/img/mustang.png',
      },
      {
        id: 3,
        vehicle: 'Territory',
        volumetotal: 4560,
        connected: 4000,
        softwareUpdates: 3050,
        img: '/img/territory.png',
      },
      {
        id: 4,
        vehicle: 'Bronco Sport',
        volumetotal: 7560,
        connected: 4060,
        softwareUpdates: 2050,
        img: '/img/broncoSport.png',
      },
    ];
  
    res.status(200).json({ vehicles });
  }
  