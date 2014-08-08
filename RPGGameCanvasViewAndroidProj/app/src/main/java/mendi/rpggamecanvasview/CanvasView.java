package mendi.rpggamecanvasview;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.webkit.WebView;

public class CanvasView extends Activity {

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.setContentView(R.layout.activity_canvas_view);

        WebView myWebView = (WebView) this.findViewById(R.id.webView);

        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.getSettings().setBuiltInZoomControls(true);
        myWebView.getSettings().setAllowFileAccessFromFileURLs(true); //Maybe you don't need this rule
        myWebView.getSettings().setAllowUniversalAccessFromFileURLs(true);
        myWebView.loadUrl("file:///android_asset/game.html");

    }

}