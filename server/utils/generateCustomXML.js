const generateCustomXMLObject = (fromDB) => {

    const customXML = `<VAST version="2.0">
    <Ad id="ComboGuard">
    <InLine>
    <AdSystem>2.0</AdSystem>
    <Impression/>
    <Creatives>
    <Creative>
    <Linear>
    <Duration>00:00:19</Duration>
    <MediaFiles>
    <MediaFile type="application/x-shockwave-flash" apiFramework="VPAID" height="168" width="298" delivery="progressive">
    <![CDATA[
    http://localhost/ComboWrapper.swf?vast=https%3A%2F%2Fvideo.combotag.com%2F17.xml&position=middle_right&hideUI=false&videoId=1
    ]]>
    </MediaFile>
    <MediaFile type="application/javascript" apiFramework="VPAID" height="168" width="298" delivery="progressive">
    <![CDATA[
    http://localhost/?vast=${fromDB[0].vast_url}&position=${fromDB[0].position}&hideUI=${fromDB[0].hide_ui}&videoId=${fromDB[0].id}
    ]]>
    </MediaFile>
    </MediaFiles>
    </Linear>
    </Creative>
    </Creatives>
    </InLine>
    </Ad>
    </VAST>`; 

    return customXML;
}


module.exports = generateCustomXMLObject; 