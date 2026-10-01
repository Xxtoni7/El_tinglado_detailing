const legalDocumentsByHash = {
  "#politica-de-privacidad": "privacy",
  "#terminos-y-condiciones": "terms",
};

export function resolveLegalDocument(hash) {
  return legalDocumentsByHash[hash] ?? null;
}
