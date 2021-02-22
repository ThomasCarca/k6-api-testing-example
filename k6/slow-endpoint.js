import http from 'k6/http';

export default function slow() {
  http.get('http://localhost:3000/slow');
}
