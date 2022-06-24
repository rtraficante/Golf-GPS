export function getDistanceFromLatLonInYards(lat1, lon1, lat2, lon2) {
  const R = 6975240;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function calcZoom(distance) {
  if (distance > 100 && distance <= 130) {
    return 19.3;
  } else if (distance > 130 && distance <= 160) {
    return 18.7;
  } else if (distance > 160 && distance <= 220) {
    return 18.3;
  } else if (distance > 220 && distance <= 300) {
    return 17.6;
  } else if (distance > 300 && distance <= 400) {
    return 17.3;
  } else {
    return 17;
  }
}
