import axios from "axios";

export async function createAssessment(token: string) {
  const siteKey = process.env.RECAPTCHA_SITE_KEY;
  const apiKey = process.env.GCLOUD_API_KEY;

  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/gumiapps/assessments?key=${apiKey}`;

  const data = {
    event: {
      token,
      expectedAction: "CONTACT",
      siteKey,
    },
  };

  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (err: any) {
    console.error("reCAPTCHA error:", err.response?.data || err.message);
    return null;
  }
}

export async function verifyToken(token: string): Promise<boolean> {
  const res = await createAssessment(token);
  return res?.tokenProperties?.valid === true;
}
