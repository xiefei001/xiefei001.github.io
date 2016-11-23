webpackJsonp([2,3],{

/***/ 392:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(392)(__webpack_require__(663))

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(392)(__webpack_require__(664))

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = "/*\n * JavaScript Canvas to Blob\n * https://github.com/blueimp/JavaScript-Canvas-to-Blob\n *\n * Copyright 2012, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * http://www.opensource.org/licenses/MIT\n *\n * Based on stackoverflow user Stoive's code snippet:\n * http://stackoverflow.com/q/4998908\n */\n\n/* global atob, Blob, define */\n\n;(function (window) {\n  'use strict'\n\n  var CanvasPrototype = window.HTMLCanvasElement &&\n                          window.HTMLCanvasElement.prototype\n  var hasBlobConstructor = window.Blob && (function () {\n    try {\n      return Boolean(new Blob())\n    } catch (e) {\n      return false\n    }\n  }())\n  var hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array &&\n    (function () {\n      try {\n        return new Blob([new Uint8Array(100)]).size === 100\n      } catch (e) {\n        return false\n      }\n    }())\n  var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||\n                      window.MozBlobBuilder || window.MSBlobBuilder\n  var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/\n  var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob &&\n    window.ArrayBuffer && window.Uint8Array &&\n    function (dataURI) {\n      var matches,\n        mediaType,\n        isBase64,\n        dataString,\n        byteString,\n        arrayBuffer,\n        intArray,\n        i,\n        bb\n      // Parse the dataURI components as per RFC 2397\n      matches = dataURI.match(dataURIPattern)\n      if (!matches) {\n        throw new Error('invalid data URI')\n      }\n      // Default to text/plain;charset=US-ASCII\n      mediaType = matches[2]\n        ? matches[1]\n        : 'text/plain' + (matches[3] || ';charset=US-ASCII')\n      isBase64 = !!matches[4]\n      dataString = dataURI.slice(matches[0].length)\n      if (isBase64) {\n        // Convert base64 to raw binary data held in a string:\n        byteString = atob(dataString)\n      } else {\n        // Convert base64/URLEncoded data component to raw binary:\n        byteString = decodeURIComponent(dataString)\n      }\n      // Write the bytes of the string to an ArrayBuffer:\n      arrayBuffer = new ArrayBuffer(byteString.length)\n      intArray = new Uint8Array(arrayBuffer)\n      for (i = 0; i < byteString.length; i += 1) {\n        intArray[i] = byteString.charCodeAt(i)\n      }\n      // Write the ArrayBuffer (or ArrayBufferView) to a blob:\n      if (hasBlobConstructor) {\n        return new Blob(\n          [hasArrayBufferViewSupport ? intArray : arrayBuffer],\n          {type: mediaType}\n        )\n      }\n      bb = new BlobBuilder()\n      bb.append(arrayBuffer)\n      return bb.getBlob(mediaType)\n    }\n  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {\n    if (CanvasPrototype.mozGetAsFile) {\n      CanvasPrototype.toBlob = function (callback, type, quality) {\n        if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {\n          callback(dataURLtoBlob(this.toDataURL(type, quality)))\n        } else {\n          callback(this.mozGetAsFile('blob', type))\n        }\n      }\n    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {\n      CanvasPrototype.toBlob = function (callback, type, quality) {\n        callback(dataURLtoBlob(this.toDataURL(type, quality)))\n      }\n    }\n  }\n  if (typeof define === 'function' && define.amd) {\n    define(function () {\n      return dataURLtoBlob\n    })\n  } else if (typeof module === 'object' && module.exports) {\n    module.exports = dataURLtoBlob\n  } else {\n    window.dataURLtoBlob = dataURLtoBlob\n  }\n}(window))\n"

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = "(function() {\n\n    var debug = false;\n\n    var root = this;\n\n    var EXIF = function(obj) {\n        if (obj instanceof EXIF) return obj;\n        if (!(this instanceof EXIF)) return new EXIF(obj);\n        this.EXIFwrapped = obj;\n    };\n\n    if (typeof exports !== 'undefined') {\n        if (typeof module !== 'undefined' && module.exports) {\n            exports = module.exports = EXIF;\n        }\n        exports.EXIF = EXIF;\n    } else {\n        root.EXIF = EXIF;\n    }\n\n    var ExifTags = EXIF.Tags = {\n\n        // version tags\n        0x9000 : \"ExifVersion\",             // EXIF version\n        0xA000 : \"FlashpixVersion\",         // Flashpix format version\n\n        // colorspace tags\n        0xA001 : \"ColorSpace\",              // Color space information tag\n\n        // image configuration\n        0xA002 : \"PixelXDimension\",         // Valid width of meaningful image\n        0xA003 : \"PixelYDimension\",         // Valid height of meaningful image\n        0x9101 : \"ComponentsConfiguration\", // Information about channels\n        0x9102 : \"CompressedBitsPerPixel\",  // Compressed bits per pixel\n\n        // user information\n        0x927C : \"MakerNote\",               // Any desired information written by the manufacturer\n        0x9286 : \"UserComment\",             // Comments by user\n\n        // related file\n        0xA004 : \"RelatedSoundFile\",        // Name of related sound file\n\n        // date and time\n        0x9003 : \"DateTimeOriginal\",        // Date and time when the original image was generated\n        0x9004 : \"DateTimeDigitized\",       // Date and time when the image was stored digitally\n        0x9290 : \"SubsecTime\",              // Fractions of seconds for DateTime\n        0x9291 : \"SubsecTimeOriginal\",      // Fractions of seconds for DateTimeOriginal\n        0x9292 : \"SubsecTimeDigitized\",     // Fractions of seconds for DateTimeDigitized\n\n        // picture-taking conditions\n        0x829A : \"ExposureTime\",            // Exposure time (in seconds)\n        0x829D : \"FNumber\",                 // F number\n        0x8822 : \"ExposureProgram\",         // Exposure program\n        0x8824 : \"SpectralSensitivity\",     // Spectral sensitivity\n        0x8827 : \"ISOSpeedRatings\",         // ISO speed rating\n        0x8828 : \"OECF\",                    // Optoelectric conversion factor\n        0x9201 : \"ShutterSpeedValue\",       // Shutter speed\n        0x9202 : \"ApertureValue\",           // Lens aperture\n        0x9203 : \"BrightnessValue\",         // Value of brightness\n        0x9204 : \"ExposureBias\",            // Exposure bias\n        0x9205 : \"MaxApertureValue\",        // Smallest F number of lens\n        0x9206 : \"SubjectDistance\",         // Distance to subject in meters\n        0x9207 : \"MeteringMode\",            // Metering mode\n        0x9208 : \"LightSource\",             // Kind of light source\n        0x9209 : \"Flash\",                   // Flash status\n        0x9214 : \"SubjectArea\",             // Location and area of main subject\n        0x920A : \"FocalLength\",             // Focal length of the lens in mm\n        0xA20B : \"FlashEnergy\",             // Strobe energy in BCPS\n        0xA20C : \"SpatialFrequencyResponse\",    //\n        0xA20E : \"FocalPlaneXResolution\",   // Number of pixels in width direction per FocalPlaneResolutionUnit\n        0xA20F : \"FocalPlaneYResolution\",   // Number of pixels in height direction per FocalPlaneResolutionUnit\n        0xA210 : \"FocalPlaneResolutionUnit\",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution\n        0xA214 : \"SubjectLocation\",         // Location of subject in image\n        0xA215 : \"ExposureIndex\",           // Exposure index selected on camera\n        0xA217 : \"SensingMethod\",           // Image sensor type\n        0xA300 : \"FileSource\",              // Image source (3 == DSC)\n        0xA301 : \"SceneType\",               // Scene type (1 == directly photographed)\n        0xA302 : \"CFAPattern\",              // Color filter array geometric pattern\n        0xA401 : \"CustomRendered\",          // Special processing\n        0xA402 : \"ExposureMode\",            // Exposure mode\n        0xA403 : \"WhiteBalance\",            // 1 = auto white balance, 2 = manual\n        0xA404 : \"DigitalZoomRation\",       // Digital zoom ratio\n        0xA405 : \"FocalLengthIn35mmFilm\",   // Equivalent foacl length assuming 35mm film camera (in mm)\n        0xA406 : \"SceneCaptureType\",        // Type of scene\n        0xA407 : \"GainControl\",             // Degree of overall image gain adjustment\n        0xA408 : \"Contrast\",                // Direction of contrast processing applied by camera\n        0xA409 : \"Saturation\",              // Direction of saturation processing applied by camera\n        0xA40A : \"Sharpness\",               // Direction of sharpness processing applied by camera\n        0xA40B : \"DeviceSettingDescription\",    //\n        0xA40C : \"SubjectDistanceRange\",    // Distance to subject\n\n        // other tags\n        0xA005 : \"InteroperabilityIFDPointer\",\n        0xA420 : \"ImageUniqueID\"            // Identifier assigned uniquely to each image\n    };\n\n    var TiffTags = EXIF.TiffTags = {\n        0x0100 : \"ImageWidth\",\n        0x0101 : \"ImageHeight\",\n        0x8769 : \"ExifIFDPointer\",\n        0x8825 : \"GPSInfoIFDPointer\",\n        0xA005 : \"InteroperabilityIFDPointer\",\n        0x0102 : \"BitsPerSample\",\n        0x0103 : \"Compression\",\n        0x0106 : \"PhotometricInterpretation\",\n        0x0112 : \"Orientation\",\n        0x0115 : \"SamplesPerPixel\",\n        0x011C : \"PlanarConfiguration\",\n        0x0212 : \"YCbCrSubSampling\",\n        0x0213 : \"YCbCrPositioning\",\n        0x011A : \"XResolution\",\n        0x011B : \"YResolution\",\n        0x0128 : \"ResolutionUnit\",\n        0x0111 : \"StripOffsets\",\n        0x0116 : \"RowsPerStrip\",\n        0x0117 : \"StripByteCounts\",\n        0x0201 : \"JPEGInterchangeFormat\",\n        0x0202 : \"JPEGInterchangeFormatLength\",\n        0x012D : \"TransferFunction\",\n        0x013E : \"WhitePoint\",\n        0x013F : \"PrimaryChromaticities\",\n        0x0211 : \"YCbCrCoefficients\",\n        0x0214 : \"ReferenceBlackWhite\",\n        0x0132 : \"DateTime\",\n        0x010E : \"ImageDescription\",\n        0x010F : \"Make\",\n        0x0110 : \"Model\",\n        0x0131 : \"Software\",\n        0x013B : \"Artist\",\n        0x8298 : \"Copyright\"\n    };\n\n    var GPSTags = EXIF.GPSTags = {\n        0x0000 : \"GPSVersionID\",\n        0x0001 : \"GPSLatitudeRef\",\n        0x0002 : \"GPSLatitude\",\n        0x0003 : \"GPSLongitudeRef\",\n        0x0004 : \"GPSLongitude\",\n        0x0005 : \"GPSAltitudeRef\",\n        0x0006 : \"GPSAltitude\",\n        0x0007 : \"GPSTimeStamp\",\n        0x0008 : \"GPSSatellites\",\n        0x0009 : \"GPSStatus\",\n        0x000A : \"GPSMeasureMode\",\n        0x000B : \"GPSDOP\",\n        0x000C : \"GPSSpeedRef\",\n        0x000D : \"GPSSpeed\",\n        0x000E : \"GPSTrackRef\",\n        0x000F : \"GPSTrack\",\n        0x0010 : \"GPSImgDirectionRef\",\n        0x0011 : \"GPSImgDirection\",\n        0x0012 : \"GPSMapDatum\",\n        0x0013 : \"GPSDestLatitudeRef\",\n        0x0014 : \"GPSDestLatitude\",\n        0x0015 : \"GPSDestLongitudeRef\",\n        0x0016 : \"GPSDestLongitude\",\n        0x0017 : \"GPSDestBearingRef\",\n        0x0018 : \"GPSDestBearing\",\n        0x0019 : \"GPSDestDistanceRef\",\n        0x001A : \"GPSDestDistance\",\n        0x001B : \"GPSProcessingMethod\",\n        0x001C : \"GPSAreaInformation\",\n        0x001D : \"GPSDateStamp\",\n        0x001E : \"GPSDifferential\"\n    };\n\n    var StringValues = EXIF.StringValues = {\n        ExposureProgram : {\n            0 : \"Not defined\",\n            1 : \"Manual\",\n            2 : \"Normal program\",\n            3 : \"Aperture priority\",\n            4 : \"Shutter priority\",\n            5 : \"Creative program\",\n            6 : \"Action program\",\n            7 : \"Portrait mode\",\n            8 : \"Landscape mode\"\n        },\n        MeteringMode : {\n            0 : \"Unknown\",\n            1 : \"Average\",\n            2 : \"CenterWeightedAverage\",\n            3 : \"Spot\",\n            4 : \"MultiSpot\",\n            5 : \"Pattern\",\n            6 : \"Partial\",\n            255 : \"Other\"\n        },\n        LightSource : {\n            0 : \"Unknown\",\n            1 : \"Daylight\",\n            2 : \"Fluorescent\",\n            3 : \"Tungsten (incandescent light)\",\n            4 : \"Flash\",\n            9 : \"Fine weather\",\n            10 : \"Cloudy weather\",\n            11 : \"Shade\",\n            12 : \"Daylight fluorescent (D 5700 - 7100K)\",\n            13 : \"Day white fluorescent (N 4600 - 5400K)\",\n            14 : \"Cool white fluorescent (W 3900 - 4500K)\",\n            15 : \"White fluorescent (WW 3200 - 3700K)\",\n            17 : \"Standard light A\",\n            18 : \"Standard light B\",\n            19 : \"Standard light C\",\n            20 : \"D55\",\n            21 : \"D65\",\n            22 : \"D75\",\n            23 : \"D50\",\n            24 : \"ISO studio tungsten\",\n            255 : \"Other\"\n        },\n        Flash : {\n            0x0000 : \"Flash did not fire\",\n            0x0001 : \"Flash fired\",\n            0x0005 : \"Strobe return light not detected\",\n            0x0007 : \"Strobe return light detected\",\n            0x0009 : \"Flash fired, compulsory flash mode\",\n            0x000D : \"Flash fired, compulsory flash mode, return light not detected\",\n            0x000F : \"Flash fired, compulsory flash mode, return light detected\",\n            0x0010 : \"Flash did not fire, compulsory flash mode\",\n            0x0018 : \"Flash did not fire, auto mode\",\n            0x0019 : \"Flash fired, auto mode\",\n            0x001D : \"Flash fired, auto mode, return light not detected\",\n            0x001F : \"Flash fired, auto mode, return light detected\",\n            0x0020 : \"No flash function\",\n            0x0041 : \"Flash fired, red-eye reduction mode\",\n            0x0045 : \"Flash fired, red-eye reduction mode, return light not detected\",\n            0x0047 : \"Flash fired, red-eye reduction mode, return light detected\",\n            0x0049 : \"Flash fired, compulsory flash mode, red-eye reduction mode\",\n            0x004D : \"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected\",\n            0x004F : \"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected\",\n            0x0059 : \"Flash fired, auto mode, red-eye reduction mode\",\n            0x005D : \"Flash fired, auto mode, return light not detected, red-eye reduction mode\",\n            0x005F : \"Flash fired, auto mode, return light detected, red-eye reduction mode\"\n        },\n        SensingMethod : {\n            1 : \"Not defined\",\n            2 : \"One-chip color area sensor\",\n            3 : \"Two-chip color area sensor\",\n            4 : \"Three-chip color area sensor\",\n            5 : \"Color sequential area sensor\",\n            7 : \"Trilinear sensor\",\n            8 : \"Color sequential linear sensor\"\n        },\n        SceneCaptureType : {\n            0 : \"Standard\",\n            1 : \"Landscape\",\n            2 : \"Portrait\",\n            3 : \"Night scene\"\n        },\n        SceneType : {\n            1 : \"Directly photographed\"\n        },\n        CustomRendered : {\n            0 : \"Normal process\",\n            1 : \"Custom process\"\n        },\n        WhiteBalance : {\n            0 : \"Auto white balance\",\n            1 : \"Manual white balance\"\n        },\n        GainControl : {\n            0 : \"None\",\n            1 : \"Low gain up\",\n            2 : \"High gain up\",\n            3 : \"Low gain down\",\n            4 : \"High gain down\"\n        },\n        Contrast : {\n            0 : \"Normal\",\n            1 : \"Soft\",\n            2 : \"Hard\"\n        },\n        Saturation : {\n            0 : \"Normal\",\n            1 : \"Low saturation\",\n            2 : \"High saturation\"\n        },\n        Sharpness : {\n            0 : \"Normal\",\n            1 : \"Soft\",\n            2 : \"Hard\"\n        },\n        SubjectDistanceRange : {\n            0 : \"Unknown\",\n            1 : \"Macro\",\n            2 : \"Close view\",\n            3 : \"Distant view\"\n        },\n        FileSource : {\n            3 : \"DSC\"\n        },\n\n        Components : {\n            0 : \"\",\n            1 : \"Y\",\n            2 : \"Cb\",\n            3 : \"Cr\",\n            4 : \"R\",\n            5 : \"G\",\n            6 : \"B\"\n        }\n    };\n\n    function addEvent(element, event, handler) {\n        if (element.addEventListener) {\n            element.addEventListener(event, handler, false);\n        } else if (element.attachEvent) {\n            element.attachEvent(\"on\" + event, handler);\n        }\n    }\n\n    function imageHasData(img) {\n        return !!(img.exifdata);\n    }\n\n\n    function base64ToArrayBuffer(base64, contentType) {\n        contentType = contentType || base64.match(/^data\\:([^\\;]+)\\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'\n        base64 = base64.replace(/^data\\:([^\\;]+)\\;base64,/gmi, '');\n        var binary = atob(base64);\n        var len = binary.length;\n        var buffer = new ArrayBuffer(len);\n        var view = new Uint8Array(buffer);\n        for (var i = 0; i < len; i++) {\n            view[i] = binary.charCodeAt(i);\n        }\n        return buffer;\n    }\n\n    function objectURLToBlob(url, callback) {\n        var http = new XMLHttpRequest();\n        http.open(\"GET\", url, true);\n        http.responseType = \"blob\";\n        http.onload = function(e) {\n            if (this.status == 200 || this.status === 0) {\n                callback(this.response);\n            }\n        };\n        http.send();\n    }\n\n    function getImageData(img, callback) {\n        function handleBinaryFile(binFile) {\n            var data = findEXIFinJPEG(binFile);\n            var iptcdata = findIPTCinJPEG(binFile);\n            img.exifdata = data || {};\n            img.iptcdata = iptcdata || {};\n            if (callback) {\n                callback.call(img);\n            }\n        }\n\n        if (img.src) {\n            if (/^data\\:/i.test(img.src)) { // Data URI\n                var arrayBuffer = base64ToArrayBuffer(img.src);\n                handleBinaryFile(arrayBuffer);\n\n            } else if (/^blob\\:/i.test(img.src)) { // Object URL\n                var fileReader = new FileReader();\n                fileReader.onload = function(e) {\n                    handleBinaryFile(e.target.result);\n                };\n                objectURLToBlob(img.src, function (blob) {\n                    fileReader.readAsArrayBuffer(blob);\n                });\n            } else {\n                var http = new XMLHttpRequest();\n                http.onload = function() {\n                    if (this.status == 200 || this.status === 0) {\n                        handleBinaryFile(http.response);\n                    } else {\n                        throw \"Could not load image\";\n                    }\n                    http = null;\n                };\n                http.open(\"GET\", img.src, true);\n                http.responseType = \"arraybuffer\";\n                http.send(null);\n            }\n        } else if (window.FileReader && (img instanceof window.Blob || img instanceof window.File)) {\n            var fileReader = new FileReader();\n            fileReader.onload = function(e) {\n                if (debug) console.log(\"Got file of length \" + e.target.result.byteLength);\n                handleBinaryFile(e.target.result);\n            };\n\n            fileReader.readAsArrayBuffer(img);\n        }\n    }\n\n    function findEXIFinJPEG(file) {\n        var dataView = new DataView(file);\n\n        if (debug) console.log(\"Got file of length \" + file.byteLength);\n        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {\n            if (debug) console.log(\"Not a valid JPEG\");\n            return false; // not a valid jpeg\n        }\n\n        var offset = 2,\n            length = file.byteLength,\n            marker;\n\n        while (offset < length) {\n            if (dataView.getUint8(offset) != 0xFF) {\n                if (debug) console.log(\"Not a valid marker at offset \" + offset + \", found: \" + dataView.getUint8(offset));\n                return false; // not a valid marker, something is wrong\n            }\n\n            marker = dataView.getUint8(offset + 1);\n            if (debug) console.log(marker);\n\n            // we could implement handling for other markers here,\n            // but we're only looking for 0xFFE1 for EXIF data\n\n            if (marker == 225) {\n                if (debug) console.log(\"Found 0xFFE1 marker\");\n\n                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);\n\n                // offset += 2 + file.getShortAt(offset+2, true);\n\n            } else {\n                offset += 2 + dataView.getUint16(offset+2);\n            }\n\n        }\n\n    }\n\n    function findIPTCinJPEG(file) {\n        var dataView = new DataView(file);\n\n        if (debug) console.log(\"Got file of length \" + file.byteLength);\n        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {\n            if (debug) console.log(\"Not a valid JPEG\");\n            return false; // not a valid jpeg\n        }\n\n        var offset = 2,\n            length = file.byteLength;\n\n\n        var isFieldSegmentStart = function(dataView, offset){\n            return (\n                dataView.getUint8(offset) === 0x38 &&\n                dataView.getUint8(offset+1) === 0x42 &&\n                dataView.getUint8(offset+2) === 0x49 &&\n                dataView.getUint8(offset+3) === 0x4D &&\n                dataView.getUint8(offset+4) === 0x04 &&\n                dataView.getUint8(offset+5) === 0x04\n            );\n        };\n\n        while (offset < length) {\n\n            if ( isFieldSegmentStart(dataView, offset )){\n\n                // Get the length of the name header (which is padded to an even number of bytes)\n                var nameHeaderLength = dataView.getUint8(offset+7);\n                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;\n                // Check for pre photoshop 6 format\n                if(nameHeaderLength === 0) {\n                    // Always 4\n                    nameHeaderLength = 4;\n                }\n\n                var startOffset = offset + 8 + nameHeaderLength;\n                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);\n\n                return readIPTCData(file, startOffset, sectionLength);\n\n                break;\n\n            }\n\n\n            // Not the marker, continue searching\n            offset++;\n\n        }\n\n    }\n    var IptcFieldMap = {\n        0x78 : 'caption',\n        0x6E : 'credit',\n        0x19 : 'keywords',\n        0x37 : 'dateCreated',\n        0x50 : 'byline',\n        0x55 : 'bylineTitle',\n        0x7A : 'captionWriter',\n        0x69 : 'headline',\n        0x74 : 'copyright',\n        0x0F : 'category'\n    };\n    function readIPTCData(file, startOffset, sectionLength){\n        var dataView = new DataView(file);\n        var data = {};\n        var fieldValue, fieldName, dataSize, segmentType, segmentSize;\n        var segmentStartPos = startOffset;\n        while(segmentStartPos < startOffset+sectionLength) {\n            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){\n                segmentType = dataView.getUint8(segmentStartPos+2);\n                if(segmentType in IptcFieldMap) {\n                    dataSize = dataView.getInt16(segmentStartPos+3);\n                    segmentSize = dataSize + 5;\n                    fieldName = IptcFieldMap[segmentType];\n                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);\n                    // Check if we already stored a value with this name\n                    if(data.hasOwnProperty(fieldName)) {\n                        // Value already stored with this name, create multivalue field\n                        if(data[fieldName] instanceof Array) {\n                            data[fieldName].push(fieldValue);\n                        }\n                        else {\n                            data[fieldName] = [data[fieldName], fieldValue];\n                        }\n                    }\n                    else {\n                        data[fieldName] = fieldValue;\n                    }\n                }\n\n            }\n            segmentStartPos++;\n        }\n        return data;\n    }\n\n\n\n    function readTags(file, tiffStart, dirStart, strings, bigEnd) {\n        var entries = file.getUint16(dirStart, !bigEnd),\n            tags = {},\n            entryOffset, tag,\n            i;\n\n        for (i=0;i<entries;i++) {\n            entryOffset = dirStart + i*12 + 2;\n            tag = strings[file.getUint16(entryOffset, !bigEnd)];\n            if (!tag && debug) console.log(\"Unknown tag: \" + file.getUint16(entryOffset, !bigEnd));\n            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);\n        }\n        return tags;\n    }\n\n\n    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {\n        var type = file.getUint16(entryOffset+2, !bigEnd),\n            numValues = file.getUint32(entryOffset+4, !bigEnd),\n            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,\n            offset,\n            vals, val, n,\n            numerator, denominator;\n\n        switch (type) {\n            case 1: // byte, 8-bit unsigned int\n            case 7: // undefined, 8-bit byte, value depending on field\n                if (numValues == 1) {\n                    return file.getUint8(entryOffset + 8, !bigEnd);\n                } else {\n                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);\n                    vals = [];\n                    for (n=0;n<numValues;n++) {\n                        vals[n] = file.getUint8(offset + n);\n                    }\n                    return vals;\n                }\n\n            case 2: // ascii, 8-bit byte\n                offset = numValues > 4 ? valueOffset : (entryOffset + 8);\n                return getStringFromDB(file, offset, numValues-1);\n\n            case 3: // short, 16 bit int\n                if (numValues == 1) {\n                    return file.getUint16(entryOffset + 8, !bigEnd);\n                } else {\n                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);\n                    vals = [];\n                    for (n=0;n<numValues;n++) {\n                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);\n                    }\n                    return vals;\n                }\n\n            case 4: // long, 32 bit int\n                if (numValues == 1) {\n                    return file.getUint32(entryOffset + 8, !bigEnd);\n                } else {\n                    vals = [];\n                    for (n=0;n<numValues;n++) {\n                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);\n                    }\n                    return vals;\n                }\n\n            case 5:    // rational = two long values, first is numerator, second is denominator\n                if (numValues == 1) {\n                    numerator = file.getUint32(valueOffset, !bigEnd);\n                    denominator = file.getUint32(valueOffset+4, !bigEnd);\n                    val = new Number(numerator / denominator);\n                    val.numerator = numerator;\n                    val.denominator = denominator;\n                    return val;\n                } else {\n                    vals = [];\n                    for (n=0;n<numValues;n++) {\n                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);\n                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);\n                        vals[n] = new Number(numerator / denominator);\n                        vals[n].numerator = numerator;\n                        vals[n].denominator = denominator;\n                    }\n                    return vals;\n                }\n\n            case 9: // slong, 32 bit signed int\n                if (numValues == 1) {\n                    return file.getInt32(entryOffset + 8, !bigEnd);\n                } else {\n                    vals = [];\n                    for (n=0;n<numValues;n++) {\n                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);\n                    }\n                    return vals;\n                }\n\n            case 10: // signed rational, two slongs, first is numerator, second is denominator\n                if (numValues == 1) {\n                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);\n                } else {\n                    vals = [];\n                    for (n=0;n<numValues;n++) {\n                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);\n                    }\n                    return vals;\n                }\n        }\n    }\n\n    function getStringFromDB(buffer, start, length) {\n        var outstr = \"\";\n        for (n = start; n < start+length; n++) {\n            outstr += String.fromCharCode(buffer.getUint8(n));\n        }\n        return outstr;\n    }\n\n    function readEXIFData(file, start) {\n        if (getStringFromDB(file, start, 4) != \"Exif\") {\n            if (debug) console.log(\"Not valid EXIF data! \" + getStringFromDB(file, start, 4));\n            return false;\n        }\n\n        var bigEnd,\n            tags, tag,\n            exifData, gpsData,\n            tiffOffset = start + 6;\n\n        // test for TIFF validity and endianness\n        if (file.getUint16(tiffOffset) == 0x4949) {\n            bigEnd = false;\n        } else if (file.getUint16(tiffOffset) == 0x4D4D) {\n            bigEnd = true;\n        } else {\n            if (debug) console.log(\"Not valid TIFF data! (no 0x4949 or 0x4D4D)\");\n            return false;\n        }\n\n        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {\n            if (debug) console.log(\"Not valid TIFF data! (no 0x002A)\");\n            return false;\n        }\n\n        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);\n\n        if (firstIFDOffset < 0x00000008) {\n            if (debug) console.log(\"Not valid TIFF data! (First offset less than 8)\", file.getUint32(tiffOffset+4, !bigEnd));\n            return false;\n        }\n\n        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);\n\n        if (tags.ExifIFDPointer) {\n            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);\n            for (tag in exifData) {\n                switch (tag) {\n                    case \"LightSource\" :\n                    case \"Flash\" :\n                    case \"MeteringMode\" :\n                    case \"ExposureProgram\" :\n                    case \"SensingMethod\" :\n                    case \"SceneCaptureType\" :\n                    case \"SceneType\" :\n                    case \"CustomRendered\" :\n                    case \"WhiteBalance\" :\n                    case \"GainControl\" :\n                    case \"Contrast\" :\n                    case \"Saturation\" :\n                    case \"Sharpness\" :\n                    case \"SubjectDistanceRange\" :\n                    case \"FileSource\" :\n                        exifData[tag] = StringValues[tag][exifData[tag]];\n                        break;\n\n                    case \"ExifVersion\" :\n                    case \"FlashpixVersion\" :\n                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);\n                        break;\n\n                    case \"ComponentsConfiguration\" :\n                        exifData[tag] =\n                            StringValues.Components[exifData[tag][0]] +\n                            StringValues.Components[exifData[tag][1]] +\n                            StringValues.Components[exifData[tag][2]] +\n                            StringValues.Components[exifData[tag][3]];\n                        break;\n                }\n                tags[tag] = exifData[tag];\n            }\n        }\n\n        if (tags.GPSInfoIFDPointer) {\n            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);\n            for (tag in gpsData) {\n                switch (tag) {\n                    case \"GPSVersionID\" :\n                        gpsData[tag] = gpsData[tag][0] +\n                            \".\" + gpsData[tag][1] +\n                            \".\" + gpsData[tag][2] +\n                            \".\" + gpsData[tag][3];\n                        break;\n                }\n                tags[tag] = gpsData[tag];\n            }\n        }\n\n        return tags;\n    }\n\n    EXIF.getData = function(img, callback) {\n        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) return false;\n\n        if (!imageHasData(img)) {\n            getImageData(img, callback);\n        } else {\n            if (callback) {\n                callback.call(img);\n            }\n        }\n        return true;\n    }\n\n    EXIF.getTag = function(img, tag) {\n        if (!imageHasData(img)) return;\n        return img.exifdata[tag];\n    }\n\n    EXIF.getAllTags = function(img) {\n        if (!imageHasData(img)) return {};\n        var a,\n            data = img.exifdata,\n            tags = {};\n        for (a in data) {\n            if (data.hasOwnProperty(a)) {\n                tags[a] = data[a];\n            }\n        }\n        return tags;\n    }\n\n    EXIF.pretty = function(img) {\n        if (!imageHasData(img)) return \"\";\n        var a,\n            data = img.exifdata,\n            strPretty = \"\";\n        for (a in data) {\n            if (data.hasOwnProperty(a)) {\n                if (typeof data[a] == \"object\") {\n                    if (data[a] instanceof Number) {\n                        strPretty += a + \" : \" + data[a] + \" [\" + data[a].numerator + \"/\" + data[a].denominator + \"]\\r\\n\";\n                    } else {\n                        strPretty += a + \" : [\" + data[a].length + \" values]\\r\\n\";\n                    }\n                } else {\n                    strPretty += a + \" : \" + data[a] + \"\\r\\n\";\n                }\n            }\n        }\n        return strPretty;\n    }\n\n    EXIF.readFromBinaryFile = function(file) {\n        return findEXIFinJPEG(file);\n    }\n\n    if (typeof define === 'function' && define.amd) {\n        define('exif-js', [], function() {\n            return EXIF;\n        });\n    }\n}.call(this));\n\n"

/***/ },

/***/ 963:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(396);
module.exports = __webpack_require__(395);


/***/ }

},[963]);
//# sourceMappingURL=scripts.map