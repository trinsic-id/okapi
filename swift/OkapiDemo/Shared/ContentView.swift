//
//  ContentView.swift
//  Shared
//
//  Created by Scott Phillips on 9/9/21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        Button("Generate Key", action: { ()
            // TODO - Generate the okapi key
        });
        Button("Resolve Key Did", action: { ()
            // TODO - Resolve okapi key
        });
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
