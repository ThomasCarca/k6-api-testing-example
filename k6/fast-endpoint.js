import http from 'k6/http';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('error_rate');

export default function fast() {
  const res = http.get('http://localhost:3000/fast');
  errorRate.add(res.status >= 400);
}
