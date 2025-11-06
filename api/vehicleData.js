export default function handler(req, res) {
 // Libera CORS para o Angular local
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Trata a requisição pré-flight (CORS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }


    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Método não permitido' });
    }
  
    const { vin } = req.body;
  
    const data = {
      '2FRHDUYS2Y63NHD22454': {
        id: 1,
        odometro: 23344,
        nivelCombustivel: 76,
        status: 'on',
        lat: -12.2322,
        long: -35.2314,
      },
      '2RFAASDY54E4HDU34874': {
        id: 2,
        odometro: 130000,
        nivelCombustivel: 19,
        status: 'off',
        lat: -12.2322,
        long: -35.2314,
      },
      '2FRHDUYS2Y63NHD22455': {
        id: 3,
        odometro: 50000,
        nivelCombustivel: 90,
        status: 'on',
        lat: -12.2322,
        long: -35.2314,
      },
      '2RFAASDY54E4HDU34875': {
        id: 4,
        odometro: 10000,
        nivelCombustivel: 25,
        status: 'off',
        lat: -12.2322,
        long: -35.2314,
      },
      '2FRHDUYS2Y63NHD22654': {
        id: 5,
        odometro: 23544,
        nivelCombustivel: 76,
        status: 'on',
        lat: -12.2322,
        long: -35.2314,
      },
      '2FRHDUYS2Y63NHD22854': {
        id: 6,
        odometro: 23574,
        nivelCombustivel: 76,
        status: 'on',
        lat: -12.2322,
        long: -35.2314,
      },
    };
  
    if (!data[vin]) {
      return res.status(400).json({
        message: 'Código VIN utilizado não foi encontrado!',
      });
    }
  
    return res.status(200).json(data[vin]);
  }
  