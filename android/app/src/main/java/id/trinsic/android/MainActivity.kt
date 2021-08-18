package id.trinsic.android

import TrinsicWalletService
import trinsic.okapi.Keys
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.annotation.RequiresApi
import com.google.gson.Gson
import com.google.protobuf.ByteString
import trinsic.services.WalletService


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun testServicesButtonClick(view: View) {
        val walletService = TrinsicWalletService("http://trinsic-staging.centralus.azurecontainer.io:5000/", null)

        // SETUP ACTORS
        // Create 3 different profiles for each participant in the scenario

        // SETUP ACTORS
        // Create 3 different profiles for each participant in the scenario
        val allison: WalletService.WalletProfile = walletService.createWallet("")
        val clinic: WalletService.WalletProfile = walletService.createWallet("")
        val airline: WalletService.WalletProfile = walletService.createWallet("")

        // Store profile for later use
        // File.WriteAllBytes("allison.bin", allison.ToByteString().ToByteArray());

        // Create profile from existing data
        // var allison = WalletProfile.Parser.ParseFrom(File.ReadAllBytes("allison.bin"));

        // ISSUE CREDENTIAL
        // Sign a credential as the clinic and send it to Allison

        // Store profile for later use
        // File.WriteAllBytes("allison.bin", allison.ToByteString().ToByteArray());

        // Create profile from existing data
        // var allison = WalletProfile.Parser.ParseFrom(File.ReadAllBytes("allison.bin"));

        // ISSUE CREDENTIAL
        // Sign a credential as the clinic and send it to Allison
        walletService.setProfile(clinic)
        val credentialJson = Gson().fromJson(view.context.assets.open("vaccination-certificate-unsigned.jsonld").bufferedReader(), java.util.HashMap::class.java)

        val credential = walletService.issueCredential(credentialJson)

        println("Credential: $credential")

        // STORE CREDENTIAL
        // Alice stores the credential in her cloud wallet.

        // STORE CREDENTIAL
        // Alice stores the credential in her cloud wallet.
        walletService.setProfile(allison)
        val itemId = walletService.insertItem(credential)
        println("item id = $itemId")

        // SHARE CREDENTIAL
        // Allison shares the credential with the venue.
        // The venue has communicated with Allison the details of the credential
        // that they require expressed as a JSON-LD frame.

        // SHARE CREDENTIAL
        // Allison shares the credential with the venue.
        // The venue has communicated with Allison the details of the credential
        // that they require expressed as a JSON-LD frame.
        walletService.setProfile(allison)

        val proofRequestJson = Gson().fromJson(view.context.assets.open("vaccination-certificate-frame.jsonld").bufferedReader(), java.util.HashMap::class.java)

        val credentialProof = walletService.createProof(itemId, proofRequestJson)

        println("Proof: {credential_proof}")

        // VERIFY CREDENTIAL
        // The airline verifies the credential

        // VERIFY CREDENTIAL
        // The airline verifies the credential
        walletService.setProfile(airline)
        val valid = walletService.verifyProof(credentialProof)

        this.findViewById<TextView>(R.id.generateKeySeed123Text).text = ("Verification result: $valid")
    }

    fun generateKey123ButtonClick(view: View) {
        val request: Keys.GenerateKeyRequest =
            Keys.GenerateKeyRequest.newBuilder()
                .setKeyType(Keys.KeyType.Ed25519)
                .setSeed(ByteString.copyFrom(byteArrayOf(1, 2, 3)))
                .build()

        val response: Keys.GenerateKeyResponse = DidKey.generate(request)

        val textView = this.findViewById<TextView>(R.id.generateKeySeed123Text)
        textView.text = response.toString()
    }
}