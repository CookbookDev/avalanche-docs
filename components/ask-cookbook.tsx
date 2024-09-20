"use client";

import React from "react";
import dynamic from "next/dynamic";
const BaseAskCookbook = dynamic(() => import("@cookbookdev/docsbot/react"), { ssr: false })

/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmJlNDZhZDZkMjk4YjBkZjY5OWExMTgiLCJpYXQiOjE3MjM3NDU5NjUsImV4cCI6MjAzOTMyMTk2NX0.YRFXnhY4r8Z3it93zRzBenOL3oBPtD96tGYYl-USX2o";

export default function AskCookbook() {
  return (
    <>
      <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} /> 
    </>
  );
}