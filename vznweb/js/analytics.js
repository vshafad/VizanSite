// Optional: analytics (Posthog) – remove if not needed
!function (t, e) {
  var o, n, p, r;
  if (!e.__SV) {
    window.posthog = e;
    e._i = [];
    e.init = function (i, s, a) {
      function g(t, e) {
        var o = e.split(".");
        if (o.length == 2) {
          t = t[o[0]];
          e = o[1];
        }
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
      }
      p = t.createElement("script");
      p.type = "text/javascript";
      p.crossOrigin = "anonymous";
      p.async = !0;
      p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js";
      r = t.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(p, r);
      var u = e;
      if (a !== undefined) {
        u = e[a] = [];
      } else {
        a = "posthog";
      }
      u.people = u.people || [];
      u.toString = function (t) {
        var e = "posthog";
        if (a !== "posthog") e += "." + a;
        if (!t) e += " (stub)";
        return e;
      };
      u.people.toString = function () {
        return u.toString(1) + ".people (stub)";
      };
      o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" ");
      for (n = 0; n < o.length; n++) g(u, o[n]);
      e._i.push([i, s, a])
    };
    e.__SV = 1;
  }
}(document, window.posthog || []);

posthog.init('phc_V7JMHB0fVJGRu8UHyrsj6pSL1BS76P5zD8qCi7lrTTV', {
  api_host: 'https://us.i.posthog.com',
  autocapture: false,
  capture_pageview: false,
  capture_pageleave: false,
  capture_performance: { web_vitals: false },
  rageclick: false,
});

window.shareKey = 'mdAV3RB9lDMqlnO9GxUUog';
window.host = 'readdy.ai';
