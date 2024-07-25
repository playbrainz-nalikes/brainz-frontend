import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <>
      {children}{" "}
      <Script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VAFALy" />
    </>
  );
}
