 


//map object

const MtTrail = L.map( 'map', {
    center:[37.20023841672144, -121.98662008826739],
    zoom:12,
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    
}).addTo(MtTrail)

//  geolocation marker:
const marker = L.marker([37.20023841672144, -121.98662008826739])
marker.addTo(MtTrail).bindPopup('<p1><b>User Location</b></p1>').openPopup('')

const BlackTrail = L.marker([37.32030296061058, -122.14768772688436])
marker.addTo(MtTrail).bindPopup('<p2><b>Black Mountain</b></p2>').openPopup()

const BielawskiTrail = L.marker([37.22686857412381, -122.09138279838963])
marker.addTo(MtTrail).bindPopup('<p3><b>Mt Bielawski</b></p3>').openPopup()

const MillerTrail = L.marker([37.2044489461879, -122.20090275076653]) 
marker.addTo(MtTrail).bindPopup('<p4><b>Miller County Park</b></p4>').openPopup()

const LomaTrail= L.marker([37.11259487645803, -121.84552406417392])
marker.addTo(MtTrail).bindPopup('<p5><b>Loma Prieta</b></p5>').openPopup()

const RanchoTrail = L.marker([37.15246815321138, -121.77464986444706])
marker.addTo(MtTrail).bindPopup('<p6><b>Rancho Open Space Preserve</b></p6>').openPopup()

const LittleTrail = L.marker([37.09716088601679, -121.71810130083519])
marker.addTo(MtTrail).bindPopup('<p7><b>Little Open Space Preserve</b></p7>').openPopup()


const stations = L.layerGroup([BielawskiTrail, BlackTrail, MillerTrail, LomaTrail, RanchoTrail, LittleTrail]).addTo(MtTrail)
// icon
