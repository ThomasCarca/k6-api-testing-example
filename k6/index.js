import http from 'k6/http';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('error_rate');

export function fast() {
  const res = http.get('http://localhost:3000/fast', {
    tags: { type: 'fast_endpoint' },
  });
  errorRate.add(res.status >= 400);
}

export function slow() {
  http.get('http://localhost:3000/slow', {
    tags: { type: 'slow_endpoint' },
  });
}
