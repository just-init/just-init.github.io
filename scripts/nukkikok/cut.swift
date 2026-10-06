import Vision
import CoreImage
import AppKit
let src = URL(fileURLWithPath: CommandLine.arguments[1])
let out = URL(fileURLWithPath: CommandLine.arguments[2])
let ci = CIImage(contentsOf: src)!
let req = VNGenerateForegroundInstanceMaskRequest()
let h = VNImageRequestHandler(ciImage: ci)
try h.perform([req])
let r = req.results!.first!
print("instances", r.allInstances.count)
let buf = try r.generateMaskedImage(ofInstances: r.allInstances, from: h, croppedToInstancesExtent: true)
let img = CIImage(cvPixelBuffer: buf)
let ctx = CIContext()
try ctx.writePNGRepresentation(of: img, to: out, format: .RGBA8, colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!)
