import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

function hashField(body: string): string {
  const hash = Base64.stringify(hmacSHA512(body.trim(), 'Dr3@gvC#@4'));

  return hash;
}

export { hashField };
