import http from 'k6/http';

export default function fast() {
  http.get('http://localhost:3000/fast');
}
