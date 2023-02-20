import Link from 'next/link';
import React from 'react';

const FooterFormalLinks = () => {
  return (
    <div className="pb-4 text-sm text-center text-gray-300 text-md">
      <Link href="/terms">Terms & Conditions</Link> | <Link href="/cookies">Cookies policy</Link> |{' '}
      <a href="mailto:chargeupbcn@gmail.com">Feedback</a>
    </div>
  );
};

export default FooterFormalLinks;
